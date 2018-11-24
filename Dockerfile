FROM node:8.12.0-alpine AS base
RUN npm install -g @angular/cli
RUN adduser -D poc
WORKDIR /home/poc/project

FROM base as backend
USER root
COPY backend backend
RUN cd backend && \
    npm ci

FROM base as frontend
USER root
COPY frontend frontend
RUN cd frontend && \
    npm ci

FROM base as production
COPY --from=backend /home/poc/project/backend backend
COPY --from=frontend /home/poc/project/frontend frontend

FROM production as development
USER root
RUN apk --no-cache add \
    vim \
    zsh \
    git \
    screen

RUN echo fs.inotify.max_user_watches=524288 | tee /etc/sysctl.d/40-max-user-watches.conf && sysctl -p
RUN chown -R poc:poc /home/poc

USER poc
RUN sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)" || true

ENTRYPOINT [ "/bin/zsh" ]
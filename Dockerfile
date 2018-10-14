FROM node:8.12.0-alpine AS base
RUN npm install -g @angular/cli
RUN adduser -D poc
WORKDIR /home/poc/project

FROM base as production
USER root
COPY frontend frontend
RUN cd frontend && npm i



FROM production as development
USER root
RUN apk --no-cache add \
    vim \
    zsh \
    git

RUN chown -R poc:poc /home/poc

USER poc
RUN sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)" || true


ENTRYPOINT [ "/bin/zsh" ]
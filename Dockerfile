FROM node:8.12.0-alpine AS base
RUN npm install -g @angular/cli


FROM base as development

RUN adduser -D powerdev
RUN apk --no-cache add \
    vim \
    zsh \
    git

USER powerdev
WORKDIR /home/powerdev/project
RUN sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)" || true


CMD ["/usr/bin/tail", "-f", "/dev/null"]
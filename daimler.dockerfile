FROM registry.app.corpintra.net/dockerhub/node:18.15.0 as BUILDER
ARG ARTIFACTORY_USER=sample
ARG ARTIFACTORY_EMAIL=sample-mail
ARG ARTIFACTORY_URL=sample-url
ARG ARTIFACTORY_PASSWORD=sample-password

COPY ./ /app/
WORKDIR /app
RUN yarn install --silent
RUN NODE_ENV=production yarn build

FROM registry.app.corpintra.net/dockerhub/nginx:alpine as EXECUTOR
RUN adduser -D -u 10009 10009 -G www-data \
    && apk add --no-cache bash findutils grep sed \
    && mkdir /app && chmod -R 775 /app \
    && chgrp -R www-data /app/ \
    && touch /var/run/nginx.pid \
    && chown -R 10009:www-data /var/run/nginx.pid \
    && chown -R 10009:www-data /var/cache/nginx
COPY --from=BUILDER /app/nginx.default.config /etc/nginx/conf.d/default.conf
COPY --chown=10009:10009 --from=BUILDER /app/dist/ ./app/dist/
COPY --chown=10009:10009 --from=BUILDER /app/scripts/replace_env.sh ./app/scripts/replace_env.sh
COPY --chown=10009:10009 --from=BUILDER /app/scripts/run.sh ./app/scripts/run.sh
USER 10009
EXPOSE 8080
CMD [ "/bin/bash", "/app/scripts/run.sh" ]

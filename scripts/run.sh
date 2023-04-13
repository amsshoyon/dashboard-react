#!/usr/bin/env bash

/app/scripts/replace_env.sh replaceEnvVariable "API_HTTP_URI" "API_HTTP_URI" /app/dist

exec nginx -g 'daemon off;'

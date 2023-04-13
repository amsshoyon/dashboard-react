#!/usr/bin/env bash

replaceEnvVariable() {
  local env=${1}
  local envValue=${!env}
  local envToReplace="%%%${2}%%%"
  local file_path=${3}

  echo "Replacing env variable $envToReplace with $envValue ..."

  if [[ -z "${env}" ]]; then
    echo "Provide 'env' as first argument"
    exit 1
  fi

  if [[ -z "${envToReplace}" ]]; then
    echo "Provide 'envToReplace' as second argument"
    exit 1
  fi

  if [[ -z "${file_path}" ]]; then
    echo "Provide 'file_path' for the replacements"
    exit 1
  fi

  if [[ -z "${envValue}" ]]; then
   echo "No override of $env"
  else
   egrep -lRZ "${envToReplace}" ${file_path} | xargs -0 -l sed -i -e "s=${envToReplace}=${envValue}=g"
  fi
}

"$@"

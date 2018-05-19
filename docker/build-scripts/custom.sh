#!/usr/bin/env bash
set -xe

if [ $1 == 'local' ]; then
    echo "disable post-deploy-cmd for local environment"
    sed -ri 's/composer.json/composer.json.dist/g' /build-scripts/entrypoint.sh

    echo "override exec to allow bash as www-data with correct user id"
    sed -ri 's/exec .*/sh \/app\/docker\/build-scripts\/local.sh "$@"/g' /build-scripts/entrypoint.sh

    echo "install gosu"
    echo "deb http://ftp.debian.org/debian jessie-backports main" >> /etc/apt/sources.list.d/backports.list
    apt-get update
    apt-get -t jessie-backports install -y gosu
    rm -rf /var/lib/apt/lists/*
fi

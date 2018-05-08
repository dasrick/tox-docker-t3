FROM php:7-fpm

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        libzip-dev \
        zip \
        unzip \
        imagemagick \
        graphicsmagick \
        libicu-dev \

    && rm -r /var/lib/apt/lists/* \

    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-configure zip --with-libzip \
    && docker-php-ext-configure intl \
    && docker-php-ext-install \
        gd \
        mysqli \
        zip \
        opcache \
        intl \
    ## APCu
    && pecl install apcu \
    && docker-php-ext-enable apcu \

#RUN apt-get update && \
#    apt-get install -y --no-install-recommends \
## Configure PHP
#        libxml2-dev libfreetype6-dev \
#        libjpeg62-turbo-dev \
#        libmcrypt-dev \
#        libpng-dev \
#        zlib1g-dev \
## Install required 3rd party tools
#        graphicsmagick && \
## Configure extensions
#    docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ && \
#    docker-php-ext-configure zip --with-libzip \
#    docker-php-ext-install -j$(nproc) mysqli soap gd zip opcache intl && \
## cleanup
#    apt-get clean && \
#    apt-get -y purge \
#        libxml2-dev libfreetype6-dev \
#        libjpeg62-turbo-dev \
#        libmcrypt-dev \
#        libpng12-dev \
#        zlib1g-dev && \
#    rm -rf /var/lib/apt/lists/* /usr/src/*

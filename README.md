# Cnizz.com

Just a repository for my personal website.

## CakePHP

I created this as a CakePHP plugin so I don't have to have multiple installs of CakePHP on my localhost.

## Webpack

There is some webpack stuff in here that I am just playing around with. The main site and terminal application 
are built using ECMAScript 6.

## Setup

https://webpack.js.org/guides/installation/

```shell
npm install --save-dev webpack
npm install --save-dev style-loader css-loader
npm install sass-loader node-sass webpack --save-dev
`

## Building

```shell
./node_modules/.bin/webpack --config webpack.config.js --watch
`
#!/usr/bin/env bash
set -ex

npm install
./node_modules/.bin/webpack
node server.js

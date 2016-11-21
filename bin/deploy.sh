#!/usr/bin/env bash

cf api api.run.pivotal.io
cf login -o denver-labs -s development -u jdeklerk@pivotal.io
cf push

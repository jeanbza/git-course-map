#!/usr/bin/env bash

APP_NAME=omscs-courses
BLUE_APP_NAME=$APP_NAME             # this is the original
GREEN_APP_NAME="green-$APP_NAME"    # this is the new
HOST_NAME=$APP_NAME
TEMP_HOST_NAME="$APP_NAME-temp"
DOMAIN_NAME=cfapps.io

cf api api.run.pivotal.io
cf login -o denver-labs -s development -u jdeklerk@pivotal.io

# blue/green deploy
if cf app $APP_NAME > /dev/null; then
    echo "App already up - blue/green deploying"
    cf push $GREEN_APP_NAME -n $TEMP_HOST_NAME
    cf map-route $GREEN_APP_NAME $DOMAIN_NAME -n $HOST_NAME
    cf unmap-route $BLUE_APP_NAME $DOMAIN_NAME -n $HOST_NAME
    cf delete $BLUE_APP_NAME -f
    cf rename $GREEN_APP_NAME $BLUE_APP_NAME
    cf unmap-route $BLUE_APP_NAME $DOMAIN_NAME --hostname $TEMP_HOST_NAME
else
    echo "App not up - deploying"
    cf push $APP_NAME
fi

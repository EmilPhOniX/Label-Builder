#!/bin/bash

if [[ "$1" == "prod" ]]; then
    make stop-prod
elif [[ "$1" == "dev" ]]; then
    make stop-dev
else 
    echo "Usage: $0 [prod|dev]"
    exit 1
fi
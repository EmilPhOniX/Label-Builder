#!/bin/bash

if [[ "$1" == "prod" ]]; then
    make start-prod
elif [[ "$1" == "dev" ]]; then
    make start-dev
else 
    echo "Usage: $0 [prod|dev]"
    exit 1
fi
#!/bin/bash

function faasinate::debug::start() {
  printf "Starting FDK...\n"
  # Start the 'FDK server' process
  /python/bin/fdk /function/func.py handler &
  status=$?
  if [ $status -ne 0 ]; then
    echo "Failed to start 'FDK server' process: $status"
    exit $status
  fi
  # Start the 'FDK socket listener' process
  socat TCP-LISTEN:1234,reuseaddr,fork UNIX-CLIENT:phonywobble &
  status=$?
  if [ $status -ne 0 ]; then
    echo "Failed to start 'FDK socket listener' process: $status"
    exit $status
  fi
  # Start the 'FDK debugger' process
  fdk_pid=$(ps a | grep '/python/bin/fdk' | head -n 1 | awk '{print $1}')
  python -m debugpy --listen 0.0.0.0:5678 --pid ${fdk_pid} > /dev/null
  status=$?
  if [ $status -ne 0 ]; then
    echo "Failed to start 'FDK debugger' process: $status"
    exit $status
  fi
}

function faasinate::debug::stop() {
  printf "Stopping FDK...\n"
  # Stop the 'FDK socket listener' process
  local socat_pid=$(ps a | grep 'socat' | head -n 1 | awk '{print $1}')
  kill -9 "${socat_pid}"
  # Stop the 'FDK server' process
  local fdk_pid=$(ps a | grep '/python/bin/fdk' | head -n 1 | awk '{print $1}')
  kill -9 "${fdk_pid}"
}

function faasinate::debug::init() {
  faasinate::debug::start
  # Keep Alive. Check processes.
  local last_change=$(stat -c %y func.py)
  while sleep 3; do
    local latest=$(stat -c %y func.py)
    if [ "${last_change}" != "${latest}"  ]; then
      printf "Detected change in func.py: ${latest}\n"
      last_change="${latest}"
      faasinate::debug::stop
      faasinate::debug::start
    fi
  done

} && faasinate::debug::init

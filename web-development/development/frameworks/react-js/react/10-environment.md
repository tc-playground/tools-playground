# React Environment Configuration

## Introduction

* `React` is a client side library so, environment variables another forms of configuration need to be confiugered during the `build`/`transpilation` process, or, `fetched dynamically` when the React application starts.

## Mechanisms

* [`webpack`](https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5) can be configured to inject environment variables during the build process.

* `create-react-app` projects will already have [`dotenv`](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables) installed and configured
# jwtnoneify

This tool takes a valid JWT token and generates a new invalid token with `alg: none`. The generated token can be used to verify if a particular JWT implementation is verifiying token signatures.

## Installation

You will need to have node.js installed.

### Using npm

`npm install --global jwtnoneify`

### Using yarn

`yarn global add jwtnoneify`

## Usage

```
$ jwtnoneify <token>
```

### Using npx

```
$ npx jwtnoneify <token>
```

#!/usr/bin/env node
const prog = require('caporal');
const noneify = require('./src/noneify');

prog
  .version('1.0.0')
  .description(
    'This tool takes a valid JWT token and generates a new invalid token with alg: none. The generated token can be used to verify if a particular JWT implementation is verifiying token signatures.'
  )
  .argument('token', 'Input token is modified with alg: none')
  .action((args, options, logger) => {
    logger.info('--> New token:');
    logger.info(noneify(args.token));
  });

prog.parse(process.argv);

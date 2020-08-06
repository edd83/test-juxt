#!/usr/bin/env node
const core = require('./index.js');
const [,, ...args] = process.argv;

core.main(args);

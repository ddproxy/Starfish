const pg = require('pg');
const mysql = require('mysql');
const redis = require('redis');
const rethink = require('rethink');
const sqlite = require('sqlite3');
const mongo = require('mongo');

const StarfishError = require('./StarfishError');

let DATA_STORES = Symbol('dataStores');

/**
 * Registers a new Data Store to the Starfish cluster
 * @param options
 */
module.exports = function registerDataStore(options) {
  options = Object.assign({}, options);
  switch (options.type) {
    case '':
      throw new StarfishError('No Data Store type defined');
      break;
    case 'pg':
    case 'mysql':
    case 'rethink':
    case 'redis':
    case 'sqlite':
    case 'mongo':
    default:
      throw new StarfishError(`Data Store type {options.type} is not supported`);
      break;
  }
};
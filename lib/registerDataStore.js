const pg = require('pg');
const mysql = require('mysql');
const redis = require('redis');
const rethink = require('rethink');
const sqlite = require('sqlite3');
const mongo = require('mongo');

const StarfishError = require('./StarfishError');

let dataStores = {
  pg: [],
  mysql: [],
  redis: [],
  rethink: [],
  sqlite: [],
  mongo: []
};
let config = {};

/**
 * Registers a new Data Store to the Starfish cluster
 * @param options
 */
module.exports = function registerDataStore(options) {
  options = Object.assign({}, options);
  switch (options.type) {
  case '':
    throw new StarfishError('No Data Store type defined');
  case 'pg':
    config = Object.assign({
      user: 'starfish',
      database: 'starfish',
      password: 'starfish',
      port: 5432,
      max: 10,
      idleTimeoutMillis: 30000
    }, {
      user: options.user,
      database: options.database,
      password: options.password,
      port: options.port,
      host: options.host
    }, options.options || {});
    dataStores.pg.push(new pg.Pool(config));
    break;
  case 'mysql':
    config = Object.assign({
      user: 'starfish',
      database: 'starfish',
      password: 'starfish',
      connectionLimit: 10,
      idleTimeoutMillis: 30000
    }, {
      user: options.user,
      database: options.database,
      password: options.password,
      port: options.port,
      host: options.host
    },
    options.options);
    dataStores.mysql.push(new mysql.createPool(config));
    break;
  case 'redis':
    config = Object.assign({
      db: 'starfish',
      password: 'starfish'
    }, {
      db: options.database,
      password: options.password,
      port: options.port,
      host: options.host
    }, options.options || {});
    dataStores.redis.push(new redis.createClient(config));
    break;
  case 'rethink':
    config = Object.assign({
      user: 'starfish',
      db: 'starfish',
      password: 'starfish',
      connectionLimit: 10,
      idleTimeoutMillis: 30000
    }, {
      user: options.user,
      db: options.database,
      password: options.password,
      port: options.port,
      host: options.host
    }, options.options || {});
    dataStores.rethink.push(new rethink.connect(config));
    break;
  case 'sqlite':
    dataStores.sqlite.push(new sqlite.Database(options.filename || 'starfish.sqlite3'));
    break;
  case 'mongo':
    config = Object.assign({
      user: 'starfish',
      database: 'starfish',
      password: 'starfish',
      poolSize: 10,
      idleTimeoutMillis: 30000
    }, {
      user: options.user,
      database: options.database,
      password: options.password,
      port: options.port,
      host: options.host
    }, options.options || {});
    dataStores.mongo.push(new mongo.Database(config));
    break;
  default:
    throw new StarfishError('Data Store type ' + options.type + ' is not supported');
  }
};
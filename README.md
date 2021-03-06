# Starfish

[![npm](https://img.shields.io/npm/v/starfish-api.svg?maxAge=1000)](https://www.npmjs.com/package/starfish-api)
[![dependency Status](https://img.shields.io/david/ddproxy/starfish.svg?maxAge=1000)](https://david-dm.org/ddproxy/starfish)
[![devDependency Status](https://img.shields.io/david/dev/ddproxy/starfish.svg?maxAge=1000)](https://david-dm.org/ddproxy/starfish)
[![Build Status](https://img.shields.io/travis/ddproxy/starfish.svg?maxAge=1000)](https://travis-ci.org/ddproxy/starfish)
[![Coveralls](https://img.shields.io/coveralls/ddproxy/starfish.svg?maxAge=1000)](https://coveralls.io/github/ddproxy/starfish)
[![Code Climate](https://img.shields.io/codeclimate/github/ddproxy/starfish.svg?maxAge=1000)](https://codeclimate.com/github/ddproxy/starfish)
[![npm](https://img.shields.io/npm/dt/starfish-api.svg?maxAge=1000)](https://www.npmjs.com/package/starfish-api)
[![npm](https://img.shields.io/npm/l/starfish.svg?maxAge=1000)](https://github.com/ddproxy/starfish/blob/master/LICENSE.md)
[![node](https://img.shields.io/node/v/starfish-api.svg?maxAge=1000)](https://www.npmjs.com/package/starfish-api)

Data abstraction layer for multi-database storage and feature leverage. Each data store technology has it’s strengths. Starfish lets you transparently use the strengths of each data store without losing data or availability of that data. 

# Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
  - [The `starfish` object](#the-starfish-object)
    * [`registerDataStore()`](#registerDataStore)
    * [`removeDataStore()`](#removeDataStore)
    * [`insert()`](#inesrt)
    * [`update()`](#update)
    * [`fetch()`](#fetch)
    * [`remove()`](#remove)
* [Contributing](#contributing)
* [Author](#author)

# Installation

```
npm install starfish-api --save
```

*Requires Node v6 or above*

# Usage

Starfish is pretty simple.

* Register some data stores.
* Insert and retrieve data.

`index.js`

```javascript
const starfish = require('starfish');

starfish.registerDataStore({ type: 'sqlite' });

starfish.insert({ name: 'starfish', stars: 5 }).into('applications');
// Returns unique object id

starfish.fetch().from('applications');
// All entries in table applications
```

# API

## The `starfish` object

When importing `starfish`, you get the following top-level API:

* `registerDataStore`
* `removeDataStore`
* `insert`
* `update`
* `fetch`
* `remove`

These are documented below.

### `registerDataStore()`

Adds a new DataStore to the starfish cluster.

Args:

* `options`: Options object. Required.
  - `options.name`: Optional, unique name to identify data store. Used in logs and to remove data store. Optional.
  - `options.type`: The type of data store to be added. (pg, mysql, redis, mongo, rethink, sqlite) Required.
  - `options.host`: The hostname of the data store to be added. Defaults to localhost. Optional.
  - `options.port`: The port of the data store to be added. Defaults to data store's default port. Optional.
  - `options.password`: The password to the data store to be added. Default is empty. Optional.
  - `options.database`: The database to the data store to be added. Default is 'starfish'. Optional.
  - `options.filename`: The sqlite filename, only applies for sqlite. Defaults to starfish.sqlite3 Optional.
  - `options.options`: Optional parameters to be passed to the data store connection.

### `removeDataStore()`

Removes a DataStore from the starfish cluster. Is options.name is passed, will remove that DataStore. Otherwise, data store is looked up by type, host, port and database.

Args:

* `options`: Options object. Required.
  - `options.name`: Optional, unique name to identify data store. Used in logs and to remove data store. Optional.
  - `options.type`: The type of data store to be added. (pg, mysql, redis, mongo, rethink, sqlite) Required.
  - `options.user`: The user of the data store to be added. Defaults to `starfish`. Optional.
  - `options.host`: The hostname of the data store to be added. Defaults to `localhost`. Optional.
  - `options.port`: The port of the data store to be added. Defaults to data store's default port. Optional.
  - `options.password`: The password of the data store to be added. Defaults to `starfish`. Optional.
  - `options.database`: The database to the data store to be added. Defaults to `starfish`. Optional.

### `insert()`

Returns a chain-able Operation object.

Args:

* `data`: Data object. Required.

If data contains a function, that function will be stripped from the data object.

### `update()`

Returns a chain-able Operation object.

Args:

* `data`: Data object. Required.

If data contains a function, that function will be stripped from the data object.

### `fetch()`

Returns a chain-able Operation object.

Args:

* `query`: Query array. Optional.

### `remove()`

Returns a chain-able Operation object that will remove data by id or by chain operations..

Args:

* `id`: Object Id. Optional.

# Contributing

Clone repo, run `npm i` to install all dependencies, and then `npm run test-watch` + `npm run lint-watch` to start writing code.

For code coverage, run `npm run coverage`.

If you submit a PR, please aim for 100% code coverage and no linting errors.
Travis will fail if there are linting errors. Thank you for considering contributing. :)

# Author

Jon West - [@ddproxy](https://twitter.com/ddproxy)
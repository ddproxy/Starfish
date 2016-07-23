// Export the public API.
module.exports = {
  registerDataStore: require('./registerDataStore'),
  removeDataStore: require('./removeDataStore'),
  insert: require('./insert'),
  update: require('./update'),
  fetch: require('./fetch'),
  remove: require('./remove')
};
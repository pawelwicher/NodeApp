const util = require('util');
const redis = require('redis');

const client = redis.createClient();

const setAsync = util.promisify(client.set).bind(client);
const getAsync = util.promisify(client.get).bind(client);
const keysAsync = util.promisify(client.keys).bind(client);

const setValue = async (key, value) => {
  await setAsync(key, value);
  return key;
}

const getValue = async (key) => {
  const value = await getAsync(key);
  return value;
}

const getKeys = async () => {
  const keys = await keysAsync('*');
  return keys.join('\n');
}

exports.setValue = setValue;
exports.getValue = getValue;
exports.getKeys = getKeys;

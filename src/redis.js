const util = require('util');
const redis = require('redis');

const client = redis.createClient({
  url: 'redis://pWigowtwLvuAmqVGY394lRFuDheoMYlf@redis-10874.c250.eu-central-1-1.ec2.cloud.redislabs.com:10874'
});

client.on('connect', () => {
  console.log('Redis connect')
}).on('ready', () => {
  console.log('Redis ready')
}).on('error', (e) => {
  console.log('Redis ready', e)
}).on('close', () => {
  console.log('Redis close')
}).on('reconnecting', () => {
  console.log('Redis reconnecting')
}).on('end', () => {
  console.log('Redis end')
})

const setAsync = util.promisify(client.set).bind(client);
const getAsync = util.promisify(client.get).bind(client);

exports.setAsync = setAsync;
exports.getAsync = getAsync;

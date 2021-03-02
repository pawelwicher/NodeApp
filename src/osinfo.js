const os = require('os');

function osInfo() {
  return [
    `platform: ${os.platform()}`,
    `type: ${os.type()}`,
    `version: ${os.version()}`,
    `release: ${os.release()}`,
    `freemem: ${os.freemem()}`,
    `cpus: ${JSON.stringify(os.cpus())}`,
  ].join('\n')
}

exports.osInfo = osInfo;

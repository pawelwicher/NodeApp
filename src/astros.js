exports.getAstros = getAstros;

const fetch = require('node-fetch');

const endpoint = 'http://api.open-notify.org/astros.json';

async function getAstros() {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.people.map((x, i) => `${i + 1} ${x.craft} ${x.name}`).join('\n');
}

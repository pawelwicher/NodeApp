exports.selectAllRegisters = selectAllRegisters;
exports.selectAllRegistersAsText = selectAllRegistersAsText;

const oracledb = require('oracledb');

async function selectAllRegisters() {
  const connection = await oracledb.getConnection({
    user: 'spr',
    password: 'spr',
    connectString: 'SPR_LOCAL'
  });
  return (await connection.execute('SELECT id, code FROM OBJ_REGISTER')).rows;
}

async function selectAllRegistersAsText() {
  const result = await selectAllRegisters();
  return result.map((x, i) => `${i + 1} - ${x[0]} ${x[1]}`).join('\n');
}

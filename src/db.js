exports.selectAllRegisters = selectAllRegisters;

const oracledb = require('oracledb');

async function selectAllRegisters() {
  const connection = await oracledb.getConnection({
    user: 'spr',
    password: 'spr',
    connectString: 'SPR_LOCAL'
  });
  return (await connection.execute('SELECT id, code FROM OBJ_REGISTER')).rows;
}

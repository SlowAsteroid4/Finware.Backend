const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'finware'
});

async function getAllInvestors() {
  let conn;
  try {
    conn = await pool.getConnection();
    const resultados = await conn.query('SELECT * FROM nombre_tabla');
    const json = JSON.stringify(resultados);
    return json;
  } 
  catch (error) {
    throw new Error('Error al obtener inversores desde la base de datos: ' + error.message);
  } 
  finally {
    if (conn) conn.release();
  }
}

module.exports = {
  getAllInvestors
};

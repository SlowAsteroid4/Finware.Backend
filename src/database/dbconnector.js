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

async function getCredentials(email, password) {
  let conn;
  try {
    conn = await pool.getConnection();
    const resultados = await conn.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
  
    if (resultados.length === 1) {
      // El inicio de sesión es exitoso
      const usuario = resultados[0];
      const userData = {
        id: usuario.id,
        email: usuario.email
      };
      const json = JSON.stringify(userData);
      return json;
    } else {
      // Las credenciales de inicio de sesión son inválidas
      throw new Error('Credenciales de inicio de sesión inválidas');
    }
  } catch (error) {
    throw new Error('Error al obtener datos de inicio de sesión desde la base de datos: ' + error.message);
  } finally {
    if (conn) conn.release();
  }  
}

async function getInvest(userId) {
  let conn;
  try {
    conn = await pool.getConnection();
    const resultados = await conn.query(`SELECT * FROM nombre_tabla WHERE id = ${userId}`);
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

async function createInvest(userId, amount) {
  let conn;
  try {
    conn = await pool.getConnection();
    const resultados = await conn.query(`UPDATE nombre_tabla SET inversion = inversion + ${amount} WHERE id = ${userId}`);
    if (resultados.affectedRows == 1){
      return true;
    }
  } 
  catch (error) {
    throw new Error('Error al obtener inversores desde la base de datos: ' + error.message);
  } 
  finally {
    if (conn) conn.release();
  }
}

async function createUser(body) {
  let conn;

  let names = body.names;
  let first_lastname = body.first_lastname;
  let second_lastname = body.second_lastname;
  let age = body.age;
  let address = body.address;
  let email = body.email;
  let password = body.password;

  try {
    conn = await pool.getConnection();
    const resultados = await conn.query(
      'INSERT INTO users(names, first_lastname, second_lastname, age, address, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [names, first_lastname, second_lastname, age, address, email, password]
    );
    
    if (resultados.affectedRows == 1){
      return true;
    }
  } 
  catch (error) {
    throw new Error('Error al obtener inversores desde la base de datos: ' + error.message);
  } 
  finally {
    if (conn) conn.release();
  }
}

module.exports = {
  getAllInvestors,
  getInvest,
  createInvest,
  getCredentials,
  createUser
};

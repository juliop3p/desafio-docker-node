// const config = {
//   host: 'db',
//   user: 'root',
//   password: 'root',
//   database: 'nodedb'
// };

// const mysql = require('mysql');
// const connection = mysql.createConnection(config);

// const queries = {
//   removeTable: 'DROP TABLE IF EXISTS people;',
//   createTable: `CREATE TABLE IF NOT EXISTS people (
//     id int,
//     name varchar(255)
//   )`,
//   insertData: `INSERT INTO people(id, name) 
//     VALUES
//       (1, 'Julio'),
//       (2, 'Lucas'),
//       (3, 'Maria'),
//       (4, 'Joana')`
// };

// function populateDatabase() {
//   connection.query(queries.removeTable);
//   connection.query(queries.createTable);
//   connection.query(queries.insertData);
// }

// module.exports = { populateDatabase, connection };
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
  };
  
  const mysql = require('mysql');
  const connection = mysql.createConnection(config);
  
  const queries = {
    removeTable: 'DROP TABLE IF EXISTS people;',
    createTable: `CREATE TABLE IF NOT EXISTS people (
      id int,
      name varchar(255)
    )`,
    insertData: `INSERT INTO people(id, name) 
      VALUES
        (1, 'Julio'),
        (2, 'Lucas'),
        (3, 'Maria'),
        (4, 'Joana')`
  };
  
  function populateDatabase() {
    connection.query(queries.removeTable);
    connection.query(queries.createTable);
    connection.query(queries.insertData);
  }
  
  module.exports = { populateDatabase, connection };
  
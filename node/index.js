const express = require('express');
const util = require('util');
const { populateDatabase, connection } = require('./database.js');

const app = express();
const port = 3000;

populateDatabase();

const query = util.promisify(connection.query).bind(connection);

app.get('/', async (req, res) => {
  try {
    const select = 'SELECT * FROM people';
    const people = await query(select);

    const peopleHTML = people.map(p => `${p.id} - ${p.name}</br>`).join('');

    res.send('<h1>Full Cycle Rocks!</h1></br>' + peopleHTML);
  } catch (error) {
    console.error('Erro ao processar a solicitação:', error);
    res.status(500).send('Erro interno no servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

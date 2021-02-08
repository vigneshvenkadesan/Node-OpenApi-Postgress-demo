const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: '12345',
    port: 5432,
  })
  const getUsers = (request, response) => {
    pool.query('select * from data', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  
  const createUser = (request, response) => {
    const {name, gender, phone, address} = request.body
  
    pool.query('INSERT INTO data (name, gender, phone, address) VALUES ($1, $2, $3, $4)', [name,gender, phone, address], (error, results) => {
      if (error) {
        throw error
      }
      response.send('success');
      // response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }
  
  module.exports = {
    getUsers,
    createUser}
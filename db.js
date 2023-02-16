const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_souvenirs');

const Person = conn.define('person', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
});


module.exports = {
  conn,
  Person
}




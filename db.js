const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_souvenirs');

const Person = conn.define('person', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
});

const Souvenir = conn.define('souvenir', {
});

Souvenir.belongsTo(Person);
Person.hasMany(Souvenir);


module.exports = {
  conn,
  Person,
  Souvenir
}




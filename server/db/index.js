const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

const syncAndSeed = () => {
  db.sync({ force: true })
    .then(() => {
      Promise.all([
        User.create({ name: 'moe' }),
        User.create({ name: 'larry' }),
        User.create({ name: 'curly' })
      ])
    })
    .catch(error => console.log(error))
}


module.exports = {
  syncAndSeed,
  models: {
    User
  }
}

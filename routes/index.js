const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Ajibike Richard');
});
routes.use('/contacts', require('./contacts'))

module.exports = routes;
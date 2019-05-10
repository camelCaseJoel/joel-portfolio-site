const handlers = require('./handlers.js');
const path     = require('path');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.home
  },
  {
    method: 'GET',
    path: '/game',
    handler: handlers.game
  },
  {
    method: 'GET',
    path: '/main-site/static/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'views/static/')
      }
    }
  }
]


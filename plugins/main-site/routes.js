const handlers = require('./handlers.js');

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
  }
]


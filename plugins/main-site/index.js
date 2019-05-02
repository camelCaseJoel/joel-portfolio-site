const routes = require('./routes.js');

const after = function (server) {
  server.route(routes);
}

exports.plugin = {
  name: 'main-site',
  version: '1.0.0',
  register: async function (server, options) {
    server.dependency([], after);
  }
}

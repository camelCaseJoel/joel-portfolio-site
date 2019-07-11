const Hapi       = require('hapi');
const plugins    = require('./plugins/');
const handlebars = require('handlebars');
const fs         = require('fs');
const path       = require('path');

const init = async () => {

    const server = Hapi.server({
        port: 443,
        host: '192.168.0.6',
        tls: {
          key:  fs.readFileSync(path.join(__dirname, 'key.pem'), 'utf8' ),
          cert: fs.readFileSync(path.join(__dirname, 'server.crt'), 'utf8' )
        }
    });

    server.route({
        method: '*',
        path: '/{p*}',
        handler: async (request, h) => ({
          success: false,
          message: "This route is not defined. Pal"
        })
    });

    await server.register(plugins);

    server.views({
      engines: { html: handlebars },
      isCached: false
    });

    await server.start();
    console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
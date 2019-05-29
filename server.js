const Hapi       = require('hapi');
const plugins    = require('./plugins/');
const handlebars = require('handlebars');

const init = async () => {

    const server = Hapi.server({
        port: 80,
        host: '167.99.234.18'
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
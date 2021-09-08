const Hapi       = require('hapi');
const plugins    = require('./plugins/');
const handlebars = require('handlebars');
const fs         = require('fs');
const path       = require('path');

const conf = {
	prod: {
		port: 3000,
		host: '143.198.173.209'
	},
	dev: {
		port: 3000,
		host: 'localhost'
	}
};

const init = async () => {

    const server = Hapi.server( conf.prod );

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
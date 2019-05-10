
const mainSite   = require('./main-site');
const vision     = require('@hapi/vision');
const inert      = require('@hapi/inert');


module.exports = [
    mainSite,
    vision,
    inert
]
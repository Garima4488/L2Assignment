const Hapi = require('hapi');
const server = new Hapi.Server({port: 3000}); // tell hapi which TCP Port to "listen" on
 
server.route({
    method: 'GET',        // define the method this route will handle
    path: '/{Mani*}', // this is how you capture route parameters in Hapi
    handler: function(req, h) { // request handler method
        return 'Hello ' + req.params.Mani + '!'; // reply with text.
    }
});
 
async function startServer() {
  await server.start() // start the Hapi server on your localhost
  console.log('Now Visit: http://localhost:' + server.info.port + '/Mani');
}
 
startServer();
 
module.exports = server;
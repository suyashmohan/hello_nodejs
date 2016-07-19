'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request,reply)=>{
    return reply('Hello! World');
  }
});

server.start((err)=>{
  if(err){
    throw err;
  }

  console.log('Server running at', server.info.uri);
});

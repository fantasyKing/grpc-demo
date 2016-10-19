/**
 * grpc server
 * create 10/19/16
 */
import grpc from 'grpc';
import services from './../service';

const BASE_PROTO_PATH = `${__dirname}/../../protos/`;
const PROTO_PATH = 'hello_world.proto';
const hello_proto = grpc.load({ root: BASE_PROTO_PATH, file: PROTO_PATH }).helloworld;

function main() {
  const server = new grpc.Server();
  for (const ser of Object.keys(services)) {
    server.addProtoService(hello_proto[ser].service, services[ser]);
  }
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('grpc server start');
  process.on('SIGINT', () => {
    console.log('grpc server shutdowning');
    server.tryShutdown(() => {
      console.log('grpc server shutdown');
    });
  });
}

main();

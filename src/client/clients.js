/**
 * grpc client
 * create 10/19/16
 */
import grpc from 'grpc';

const ProtoPath = `${__dirname}./../../protos/hello_world.proto`;
const hello_proto = grpc.load(ProtoPath).helloworld;

function main() {
  const client = new hello_proto.Greeter('localhost:50051',
                                       grpc.credentials.createInsecure());
  let user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  client.sayHello({ name: user }, (err, response) => {
    console.log('Greeting:', response.message);
  });
}

main();


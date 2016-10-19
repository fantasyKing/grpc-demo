export default new class {
  sayHello(call, callback) {
    callback(null, { message: `Hello${call.request.name}` });
  }
};

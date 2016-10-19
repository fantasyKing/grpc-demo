export default new class {
  async sayHello(call, callback) {
    callback(null, { message: `Hello${call.request.name}` });
  }
};

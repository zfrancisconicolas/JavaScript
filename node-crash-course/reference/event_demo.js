const eventEmitter = require('events');

//class
class MyEmitter extends eventEmitter{}

//init
const myEmitter = new MyEmitter();

//listener
myEmitter.on('event', () => console.log('Fired'));
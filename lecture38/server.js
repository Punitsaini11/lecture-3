const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('bell-ranged', () => {
    console.log('bell rang,student should come to class');
});

emitter.on('bell-ranged', () => {
    console.log('bell rang,teacher should start the  class');
});

emitter.emit("bell-ranged");

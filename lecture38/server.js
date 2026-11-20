const EventEmitter = require('events');
const emitter = new EventEmitter();
 
const informstudents = (time) => {
    console.log(`bell rang at ${time}, student should come to class`);
};
// emitter.once('bell-ranged',informstudents);

emitter.on('bell-ranged',informstudents);
// emitter.on('bell-ranged', () => {
//     console.log('bell rang,teacher should start the  class');
// });

emitter.emit("bell-ranged","10:00 AM");
emitter.emit("bell-ranged","11:00 AM");
// emitter.off('bell-ranged',informstudents);
emitter.emit("bell-ranged","12:00 PM");

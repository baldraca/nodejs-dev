const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);


// Next

// Asynch methods needs callback functions

const fs = require('fs');

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

// NEXT

const EventEmitter = require('events');  // EventEmitter is a class

// Register a listener (Must be written before the event raised)


// Same stuff with arrowFunction
//emitter.addListener('messageLoggedAgain', (eventArg) => {
//    console.log('Listener called again', eventArg);
//});

const Logger = require('./logger');
const logger = new Logger();

logger.addListener('messageLogged', function(eventArg){
    console.log('Listener called', eventArg);
});

logger.log('message');

//Raised an event
//emitter.emit('messageLogged', { id: 1, url: 'http://' });   // emit means making a noice, produce signaling

// Raise logging (data: nessage)






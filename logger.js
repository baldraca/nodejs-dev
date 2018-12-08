const EventEmitter = require('events');  // EventEmitter is a class

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send and HTTP request
        console.log(message);
    
        //Raised an event
        this.emit('messageLogged', { id: 1, url: url }); 
    
    }
}


module.exports = Logger;
//module.exports.endPoint = url;
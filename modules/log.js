var log = {
    info: function(msg) {
        console.log('Info: '+msg);
    },
    warn: function(msg) {
        console.warn('Warn: '+msg);
    },
    error: function(msg) {
        console.error('Error: '+msg);
    }
}

module.exports = log
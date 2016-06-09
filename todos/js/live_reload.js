var path = './todos';
var fs = require('fs');

fs.watch(path, function() {
    if (location) {
        location.reload();
    }
});
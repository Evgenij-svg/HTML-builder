let fs = require('fs');
const path = require("path");
let stream = new fs.ReadStream(path.join(__dirname, `text.txt`),{ encoding: 'utf8' });
stream.on('readable', function(){
    var data = stream.read();
    if(data != null)console.log(data);
});
const fs = require("fs");
let str='';
const path = require("path");
// Function to get current filenames
// in directory
fs.readdir("./05-merge-styles/styles", (err, files) => {
  files.forEach((file) => {

  if(path.extname(file)=='.css'){
    const stream=new fs.ReadStream('./05-merge-styles/styles/'+file)   
    stream.on('readable',function(){
            let data = stream.read();
            str = data+'' + str;
            fs.writeFile("./05-merge-styles/test-files/bundle.css", str, function (err) {
                if (err) {
                  console.log(err);
                }
              });
    })
  }
  });
});
console.log(str)

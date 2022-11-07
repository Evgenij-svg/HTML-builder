const fs = require("fs");
const path = require("path");
// Function to get current filenames
// in directory
fs.readdir("./03-files-in-folder/secret-folder", (err, files) => {
  files.forEach((file) => {
    console.log(file+'\t\t'+path.extname(file)+'\t\t'+(fs.statSync('./03-files-in-folder/secret-folder/'+file).size)/1024+'Kb')
  });
});

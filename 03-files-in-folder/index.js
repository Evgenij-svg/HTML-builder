const fs = require("fs");
const path = require("path");
// Function to get current filenames
// in directory
fs.readdir("secret-folder", (err, files) => {
  files.forEach((file) => {
    console.log(file+'\t\t'+path.extname(file)+'\t\t'+fs.statSync('secret-folder/'+file).size)
  });
});

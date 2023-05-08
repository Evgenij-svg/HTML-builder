const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "secret-folder"), (err, files) => {
  if (err) throw err
  files.forEach((file) => {
    console.log(file.split('.')[0]+'\t\t'+path.extname(file)+'\t\t'+(fs.statSync(path.join(__dirname, `secret-folder/${file}`)).size)/1024+'Kb')
    });
});

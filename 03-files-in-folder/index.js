const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "secret-folder"), (err, files) => {
  if (err) throw err
  files.forEach((file) => {
    fs.stat(path.join(__dirname, "secret-folder", file), (err, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        console.log(file.split('.')[0] + '\t\t' + path.extname(file) + '\t\t' + (stats.size / 1024) + 'Kb')
      }
    });
  });
});
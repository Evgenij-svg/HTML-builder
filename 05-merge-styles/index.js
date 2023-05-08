const fs = require('fs');
let str = '';
const path = require('path');
// Function to get current filenames
// in directory
const Merge_style= path.join(__dirname, "styles");
const test_files = path.join(__dirname, "project-dist/bundle.css");

fs.readdir(Merge_style, (err, files) => {
  files.forEach((file) => {
    if (path.extname(file) == '.css') {
      const stream = new fs.ReadStream(Merge_style+'/'+file);
      console.log(stream)
      stream.on('readable', function () {
        let data = stream.read();
        str = data + '' + str;
        console.log(data)
        fs.writeFile(
        test_files,
          str,
          function (err) {
            if (err) {
              console.log(err);
            }
          }
        );
      });
    }
  });
});
console.log(str);


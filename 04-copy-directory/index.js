let fs = require("fs");

fs.mkdir("./04-copy-directory/new_files", (err) => {
  if (err) throw err; // не удалось создать папку
});

fs.readdir("./04-copy-directory/files", (err, files) => {
  files.forEach((file) => {
    fs.copyFile("./04-copy-directory/files"+'/'+`${file}`,"./04-copy-directory/new_files"+'/'+`${file}`, (err) => {
      if (err) throw err; // не удалось скопировать файл
    });
  });
});

// fs.readdir("files", (err, files) => {
//     files.forEach((file) => {
//     //   console.log(file+'\t\t'+path.extname(file)+'\t\t'+fs.statSync('files/'+file).size)
//     });
//   });
  

// fs.copyFile('files', 'new_files', err => {
//    if(err) throw err; // не удалось скопировать файл
//    console.log('Файлы успешно скопирован');
// });

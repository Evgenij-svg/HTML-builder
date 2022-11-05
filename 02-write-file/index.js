const fs = require("fs");
// fs.readFile('text.txt',function(err,data){
//     if (err) throw err
//     console.log(data.toString())
// })

// let stream=new fs.ReadStream('textInput.txt')
// let flag=true;
// stream.on('readable',function(){
//     if(flag){
//         let data = stream.read();
//         // fs.writeFile("02-write-file.txt", data+'');
//         flag=false;
//         return data+''
//     }

// })

console.log("02-write-file.txt to write");


let flag = true;
let str = " ";
let exit=[]
fs.watch("02-write-file.txt", (event, filename) => {
  if (filename) {
    let stream = new fs.ReadStream("02-write-file.txt");
    stream.on("readable", function () {
      let data = stream.read();
      if (!(data + "" == "null")) {
        str = data + "";
        str.slice(0, -4)
        exit=str.split(' ')
        if(exit.includes('exit')){
            console.log('bye')
            process.exit()
            
        }
        console.log(exit)
        fs.writeFile("filename.txt", str, function (err) {
            if (err) {
              console.log(err);
            }
          });
      }
    });
  }
});

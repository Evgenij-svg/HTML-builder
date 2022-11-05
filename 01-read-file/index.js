let fs = require('fs');
// fs.readFile('text.txt',function(err,data){
//     if (err) throw err
//     console.log(data.toString())
// })
let stream=new fs.ReadStream('./text.txt')
let flag=true;
stream.on('readable',function(){
    if(flag){
        let data = stream.read();
        console.log(data+'')
        flag=false;
        return data+''
    }

})
// // const { log } = require('console');
// // const os = require('os');

// // console.log(os.platform());
// // console.log(os.arch());
// // console.log(os.hostname());
// // console.log(os.version());
// // console.log(os.type());
// // console.log(os.cpus().length);
// // console.log(os.homedir());
// // console.log(os.totalmem()/(1024*1024*1024)+"GB")
// // console.log(os.freemem()/(1024*1024)+"MB")

// // console.log(os.machine())
// // console.log(os.availableParallelism())   
// // console.log(os.platform())   
// // console.log(os.uptime())   
// // console.log(os.type())   
// // console.log(os.type())   


// const console = require('console');
// const path = require('path');
// const fs = require('fs');
// const crypto = require('crypto')

// const file = path.resolve("Core_modules.js");
// console.log(file);
// console.log(__dirname);
// // const joint = path.join('AIML');
// // console.log(joint);

// // const data =fs.readFileSync("sample.txt","utf-8");
// // console.log(data);

// // fs.readFile("sample.txt","utf-8",(err,data)=>{
// //     if(err){
// //         console.log(err);
        
// //     }else{
// //         console.log(data);
        
// //   

// // fs.writeFileSync("./sample.txt","hello this is updated content")
// // fs.writeFile("./sample.txt","hello this is updated content again",(err)=>{
// //     if(err)console.log(err)
// // })

// // fs.appendFileSync("./sample.txt","\nNew content")

// // fs.unlinkSync("./file.txt")

// // fs.renameSync("./sample.txt","newFile.txt")

// // fs.copyFileSync("./newFile.txt","./copyFile.txt")

// // const password="Alex@1234"

// // const hash=crypto.createHash("sha256").update(password).digest("hex");
// // console.log(hash);

// // const salt=crypto.randomBytes(16).toString("hex");
// // console.log(salt);

// // const hash=crypto.createHmac("sha256",salt).update(password).digest("hex");
// // console.log(hash);

// const dns=require("dns");
// const { hostname } = require('os');

// dns.lookup("www.google.com",(err,address,family)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(address);
//         console.log(family);   
//     }
// })

// dns.reverse("8.8.8.8",(err,hostname)=>{
//     if(err){
//         console.log(err);   
//     }else{
//         console.log(hostname); 
//     }
// })

const data=process.argv;
// console.log(Number(data[2])+Number(data[3]));

console.log(process.version);
console.log(process.platform);
console.log(process.pid);
console.log(process.cwd);

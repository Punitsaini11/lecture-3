const bcrypt=require('bcrypt');

const passwaord="pukit@123";
const salt=bcrypt.genSaltSync(10);
const hash=bcrypt.hash(passwaord,salt).then((hash)=>{
    console.log(hash);
});
console.log(hash);

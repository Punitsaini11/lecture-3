const jwt=require('jsonwebtoken');
const data={
    _id:"12345",

}
// const token=jwt.sign(data,'123abc',{expiresIn:'1h'});
// console.log(token);

const generatedToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NSIsImlhdCI6MTc5NDgwNTY5MCwiZXhwIjoxNzk0ODA5MjkwfQ.OkSegc2mmfk3sH22Gs19Yk-iiY1yH1dz9Op5zUTwbT0"

const decoded=jwt.verify(generatedToken,'123abc');
console.log(decoded);
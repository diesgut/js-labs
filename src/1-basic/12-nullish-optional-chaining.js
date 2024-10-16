//nullish
const id = 0

const orId = id || "Sin id" //falsey value is evaluated
const nullishId = id ?? "Sin id" //null value is evaluated

console.log( orId ) //  'Sin id'
console.log( nullishId )  // 0

//optional chaining
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}
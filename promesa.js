let x=10;
const p= new Promise((resolve,reject)=>{
if(x==10){
    resolve("Lavarioble es igual a 10");
}else{
    reject("la variaable no es igual 10")
}
});
p
.then(res=>{
    console.log("bien:" + res);
})
.catch("error" + error);
console.log("error:" + error);



function rand(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let number = rand(1,2);

  let message = "";

if(number==1){
    message = "error404"
}else if(number==2){
    message = "error404fun"
}else{
    console.log("Ошибка!")
}





export {message};
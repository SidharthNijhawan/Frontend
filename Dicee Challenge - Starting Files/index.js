let randomNumber = Math.floor(Math.random() * 6) + 1  ;
let leftimage = document.querySelector(".img1");
let randomImageno = "dice" + randomNumber + ".png";
leftimage.setAttribute("src","images/"+ randomImageno);
 

// for right image
let randomNumber1 = Math.floor(Math.random() * 6) + 1  ;
let rightImage = document.querySelector(".img2");
let randomImageno1 = "dice" + randomNumber1 + ".png";
rightImage.setAttribute("src","images/"+ randomImageno1);

if(randomNumber > randomNumber1){
    document.querySelector("h1").innerText = "🚩 Play 1 Wins!";
}else if(randomNumber1 > randomNumber){
    document.querySelector("h1").innerText = "🚩 Play 2 Wins!";
}else{
    document.querySelector("h1").innerText = "🚩 Draw";
}
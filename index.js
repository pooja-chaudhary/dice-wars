 var randomNumber1,randomNumber2;

function randomImage1function()
{
  makeSound();
  randomNumber1= Math.random();
  randomNumber1=Math.floor(randomNumber1*6)+1;
  let  randomImage1= "images/dice" +randomNumber1+ ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
  document.getElementById("show").innerHTML="Now Player 2 can roll the dice !";
}

function randomImage2function ()
{

  makeSound();
  randomNumber2=Math.random();
  randomNumber2= Math.floor(randomNumber2*6)+1;
  let randomImage2= "images/dice" +randomNumber2+ ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
  document.querySelector("h1").classList.add("no-visibility");
  winner();
}

function winner(){
  document.getElementById("show").classList.add("no-visibility");
  document.getElementById("main-h1").classList.add("visibility");
  if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player 1 Won!";
  }
  else if(randomNumber2>randomNumber1)
  {
    document.querySelector("h1").innerHTML="Player 2 Won!";
  }
  else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
  }

  function delay(){
    document.getElementById("main-h1").innerHTML="Refresh Me";
  }
  setTimeout(delay, 2000);
}

function makeSound(){

  var sound= new Audio("sound/click.wav");
  sound.play();
}


document.querySelector("img.img1").addEventListener("click", randomImage1function);
document.querySelector("img.img2").addEventListener("click", randomImage2function);

import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  render(); //execute the function render when the page loads
  setInterval(render, 10000); //execute the function render every 10 seconds
  document.querySelector("button").addEventListener("click", function() {
    render(); //execute the function render when the button is clicked
  });
  document.getElementById("widthValue").addEventListener("change", function() {
    let input = document.getElementById("widthValue").value;
    if (input <250 || input > 400) {
      alert("Please enter a number between 250 and 400");
    } else {
      document.querySelector(".card").style.width = input + "px";
    }
  }); // Set the width of the card
  document.getElementById("heightValue").addEventListener("change", function() {
    let input = document.getElementById("heightValue").value;
    if (input <168 || input > 528) {
      alert("Please enter a number between 168 and 528");
    } else {
      const fh = Math.floor(input / 6) - 8;
      document.querySelector(".center").style.fontSize = 2*fh + "px";
      document.querySelector(".header").style.fontSize = fh + "px";
      document.querySelector(".footer").style.fontSize = fh + "px";
    }
  }); // Set the card height by changing the font sizes
}

let render = function() {
  //write your code here
  const samePalo = palo();
  const sameValue = cardValue();
  if (samePalo == "&#x2660;" || samePalo == "&#x2663;")
  {
    document.querySelector("span").innerHTML = sameValue;
    document.getElementById("valueTop").innerHTML = samePalo;
    document.getElementById("valueTop").style.color = "black";
    document.getElementById("valueBottom").innerHTML = samePalo;
    document.getElementById("valueBottom").style.color = "black";
  } // Set the color of the black cards
  else 
  {
    document.querySelector("span").innerHTML = sameValue;
    document.getElementById("valueTop").innerHTML = samePalo;
    document.getElementById("valueTop").style.color = "red";
    document.getElementById("valueBottom").innerHTML = samePalo;
    document.getElementById("valueBottom").style.color = "red";
  
  } // Set the color of the red cards
}

let palo = function() {
  let allPalo = ["&#x2660;","&#x2663;","&#x2665;","&#x2666;"];
  let temp = Math.floor(Math.random()*4);
  return allPalo[temp];
} // Function to generate a random palo

let cardValue = function () {
  let allValues = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
  let temp = Math.floor(Math.random()*13);
  return allValues[temp];

} // Function to generate a random card value

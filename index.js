// this a function to make the first button to send alert that it got clicked

/* document.querySelector("button").addEventListener("click", handleClick);

 function handleClick(){
   alert("i got clicked");
}*/

//how to write anonymous function

/* document.querySelector("button").addEventListener("click", function(){
 alert("i got clicked");
})*/


// code that makes all button to get cliked and send alert
var numberOfButtons = document.querySelectorAll("button").length;

for (var i = 0; i< numberOfButtons; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    alert("i got clicked");
  })

}

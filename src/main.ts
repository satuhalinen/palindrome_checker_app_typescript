import './style.css'

function searchHandler(){
  console.log("Test");
  }
 
  let input = document.querySelector("#feed");
  input?.addEventListener("input", searchHandler);


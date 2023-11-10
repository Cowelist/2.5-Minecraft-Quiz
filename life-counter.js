let life = localStorage.getItem("life")
const knapp = document.getElementById("lose")
let spm = knapp.getAttribute("data-spm")

document.getElementById ("life").textContent=life



knapp.addEventListener("click",function(){
  life -=1;
  document.getElementById ("life").textContent=life
  if (life == 0){
    window.location.href="lose.html"
    


  }
  else{
  /*localStorage.setItem("life", life);
  updateLifeCounter (); */
  window.location.href = "spm" + spm + ".html";
  }});

  /*function updateLifeCounter () {
    const lifecounterElement = document.getElementById("life-counter");
    if (lifeCounterElement) {
      lifeCounterElement.textContent = "lives: " + life;
     }
  }*/
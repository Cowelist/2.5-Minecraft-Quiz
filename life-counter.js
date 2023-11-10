let life = localStorage.getItem("life")
const knapp = document.getElementById("lose")
const knapp2 = document.getElementById("lose2")
const knapp3 = document.getElementById("lose3")
const knapp4 = document.getElementById("lose4")
let spm = knapp.getAttribute("data-spm")
let spo = knapp4.getAttribute("data-spm")


document.getElementById ("life").textContent=life

knapp.addEventListener("click",function(){
  life -=1;
  document.getElementById ("life").textContent=life
  if (life == 0){
    window.location.href="lose.html"
  }
  else{
    localStorage.setItem("life",life)

  window.location.href = "spm" + spm + ".html";
  }});


  document.getElementById ("life").textContent=life

knapp2.addEventListener("click",function(){
  life -=1;
  document.getElementById ("life").textContent=life
  if (life == 0){
    window.location.href="lose.html"
  }
  else{
    localStorage.setItem("life",life)

  window.location.href = "spm" + spm + ".html";
  }});


  document.getElementById ("life").textContent=life

knapp3.addEventListener("click",function(){
  life -=1;
  document.getElementById ("life").textContent=life
  if (life == 0){
    window.location.href="lose.html"
  }
  else{
    localStorage.setItem("life",life)

  window.location.href = "spm" + spm + ".html";
  }});


  document.getElementById ("life").textContent=life

  knapp4.addEventListener("click",function(){
      localStorage.setItem("life",life)
  
    window.location.href = "spm" + spo + ".html";
    });
  





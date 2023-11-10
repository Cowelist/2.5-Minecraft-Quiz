let life = localStorage.getItem("life")

const knapp = document.getElementById("lose")

knapp.addEventListener("click",function(){
  life -=1
 
  if (life == 0){
    window.location.href="lose.html"


  }
  else



  })
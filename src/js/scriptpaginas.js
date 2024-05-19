if(localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "../html/login.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;


function sair(){
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = ""
}

let menuMobile = document.querySelector(".menu-mobile")

function menuShow() {
  if  (menuMobile.classList.contains("open")){
    menuMobile.classList.remove("open")
    document.querySelector(".icon").src = "./src/assets/bars-solid.svg"
  } else {
    menuMobile.classList.add("open")
    document.querySelector(".icon").src = "./src/assets/x-solid.svg"
  }
}
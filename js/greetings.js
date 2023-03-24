const loginForm = document.querySelector("#login-form");
const nameInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = nameInput.value;
  greeting.innerText = "hello " + userName;
  localStorage.setItem("username", userName);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(localStorage.getItem("username") === null){
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = "hello " + localStorage.getItem("username");
  greeting.classList.remove(HIDDEN_CLASSNAME);

}
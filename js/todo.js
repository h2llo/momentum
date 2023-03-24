const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-form input');

function newtodo(todoMsg){
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');
  btn.innerText = "❎";
  btn.addEventListener('click',delToDo);
  span.innerText = todoMsg;
  li.append(btn);
  li.append(span);
  todoList.append(li);
}
let toDos = [];
const TODO_KEY = 'todo';
const savedToDo = localStorage.getItem(TODO_KEY);
const parseToDo = JSON.parse(savedToDo);


function delToDo(event){
  const tarGetLi = event.target.parentNode;
  const tarGetText = event.target.parentNode.children[1].innerText;
  toDos.splice(parseToDo.indexOf(tarGetText),1)
  saveToDO();
  tarGetLi.remove();

}

function saveToDO(){
  localStorage.setItem('todo',JSON.stringify(toDos))
}


function todoEnter(event){
  event.preventDefault();
  const todoValue = todoInput.value
  toDos.push(todoValue);
  todoInput.value = '';
  newtodo(todoValue);
  saveToDO();

};

todoForm.addEventListener('submit', todoEnter);

if(savedToDo){
  toDos = parseToDo;
  parseToDo.forEach(newtodo);
}
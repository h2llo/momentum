const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-form input');

function newtodo(todoMsg){
  const li = document.createElement('li');
  li.id = todoMsg.id;
  const span = document.createElement('span');
  const btn = document.createElement('button');
  btn.innerText = "❎";
  btn.addEventListener('click',delToDo);
  span.innerText = todoMsg.text;
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
  const tarGetId = tarGetLi.id;
  tarGetLi.remove();
  toDos=toDos.filter(el=>el.id !== parseInt(tarGetId));
  saveToDO();
}

function saveToDO(){
  localStorage.setItem('todo',JSON.stringify(toDos))
}


function todoEnter(event){
  event.preventDefault();
  const todoValue = todoInput.value
  const newToDoObj = {
    text: todoValue,
    id : Date.now(),
  };
  toDos.push(newToDoObj);
  todoInput.value = '';
  newtodo(newToDoObj);
  saveToDO();
};

todoForm.addEventListener('submit', todoEnter);

if(savedToDo){
  toDos = parseToDo;
  parseToDo.forEach(newtodo);
}
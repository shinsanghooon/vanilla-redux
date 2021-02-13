import { createStore } from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');


const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const addTodo = text => {
  return {
    type: ADD_TODO, text
  };
}

const deleteTodo = id => {
  return {
    type: DEL_TODO, id
  }
}

const reducer = (state = [], action) => {
  // wanna add/delete to do 
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      // mutate를 하지 않는다 -> 변형만 시키는 것 
      // 새로운 state를 가진 object를 리턴해줘야함
      return [{ text: action.text, id: Date.now() }, ...state];
    case DEL_TODO:
      console.log('delete action')
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state; 
  }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()));

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
}

const dispachDeleteTodo = (e) => {
  const id  = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
}

// repainting list 
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  // 전체를 지우고 다시 시작, 규모가 큰 프로젝트라면 느려질 수 있음
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement("button")
    btn.innerText = "DEL";
    btn.addEventListener('click', dispachDeleteTodo)
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
}

form.addEventListener('submit', onSubmit);
import { createStore } from 'redux';

const plus = document.getElementById("add")
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const store = createStore();

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

const handleAdd = () => {
  console.log('add');
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  console.log('minus');
  count = count - 1;
  updateText();
};

plus.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);


// ✅ Store는 data를 저장하는 곳
// ✅ CreateStore는 reducer를 요구함.
// ✅ Reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.
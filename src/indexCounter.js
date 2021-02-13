import { createStore } from 'redux';

const plus = document.getElementById("add")
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const PLUS = 'ADD'
const MINUS = 'MINUS'

// 유일하게 데이터를 modify 할 수 있음
const countModifier = (count = 0, action) => {
  console.log(action)
  // if (action.type === 'ADD') {
  //   console.log('They are telling me to add 1')
  //   return count + 1;
  // }else if(action.type === "MINUS"){
  //   return count - 1;
  // } else {
  //   return count
  // }

  switch (action.type){
    case PLUS:
      return count + 1 
    case MINUS:
      return count -1
    default:
      return count
  }


};

const countStore = createStore(countModifier);
console.log(countStore)

const onChange = () => {
  console.log('there was a change on the store');
  console.log(countStore.getState());
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange)

plus.addEventListener("click", () => countStore.dispatch({ type: PLUS }))
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }))


// ✅ Store는 data를 저장하는 곳
// ✅ CreateStore는 reducer를 요구함.
// ✅ Reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.
// 처음으로 data를 바꿔준다. 리턴하는 것이 application의 data가 된다. 
// ✅ Subscribe : store 안에 있는 변화 감지
// store.subscribe(func); // store안의 변화를 감지하면 func 실행
{/* < Recap > */}
// ✅ reducer : 현재 상태의 application과 함께 불려지는 function (+ with action)
// return하는 것은 application의 state가 됨
// ✅ action : reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)
// ✅ dispatch : reducer에게 action을 보내는 방법
// ✅ subscribe : store의 변화를 감지하면 인자값으로 준 함수를 실행
// ✅ switch가 자주 쓰임
// switch(action.type){
// case ..blah..:
// return smth
// case ..blah2..:
// return smth2
// default:
// return smth3
// }
// ✅ string으로 바로 쓰는 대신에 const variable로 선언해서 사용하기 -> 에러 발견 용이

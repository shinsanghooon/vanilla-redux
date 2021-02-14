
import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

// const addToDo = createAction("ADD")
// const deleteToDo = createAction("DELETE")

// // reduct toolkit에서는 상태를 새로 만들지 않고 mutate할 수 있음 
// // dont need to have switch/case
// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() }); // have to mutate, push doesn't return nothing
//     },
//     [deleteToDo]: (state, action) => 
//         state.filter(toDo => toDo.id !== action.payload) // filter return new array. return new state
// });

// action + reducer + etec ..
const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() })
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

const store = configureStore({reducer: toDos.reducer});
// with good defaults. redux dev-tools from chrome extension

// export const actionCreators = {
//   addToDo,
//   deleteToDo
// };

export const { add, remove } =  toDos.actions;

export default store;
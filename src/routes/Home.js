import React, { useState } from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store";
import { add } from "../store";
import  ToDo  from "../components/ToDo";

function Home({ toDos, addToDo }){
    console.log(toDos)
    const [text, setText] = useState("");
    
    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        // console.log(text);
        addToDo(text);
        setText('');
    }
    
    return (
        <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}/>
            <button>Add</button>
        </form>
        <ul>
            {toDos.map(toDo => (
            <ToDo {...toDo} key={toDo.id} />
            ))}
        </ul>
        </>
    )
}

function mapStateToProps(state) {
    // component의 props
    // console.log(state, ownProps);
    return { toDos: state };
}

function mapDispatchToProps(dispatch) {
    return {
      addToDo: text => dispatch(add(text))
    };
  }
  

//connect는 Home으로 보내는 Props에 추가될 수 있도록 해줌
export default connect(mapStateToProps, mapDispatchToProps) (Home);


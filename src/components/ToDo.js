import React from 'react';

function ToDo({text}) {
    return (
        <li> {text} <button>Del</button> </li>
    )
}

export default ToDo;
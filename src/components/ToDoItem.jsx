import React from "react";

function ToDoItem(props){
    return (
        <div className="list-items">
            <li>{props.text}{  }</li>
            <button onClick={()=> props.onDelete(props.id)} className="delete-btn">  Delete</button>
        </div>
    )
}

export default ToDoItem;
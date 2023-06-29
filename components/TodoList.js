"use client"

import React, { useState } from 'react'
import ToDoItems from './TodoItems';
import ToDoForm from './TodoForm';

function ToDoList() {
    const [toDoItem,setToDoItem] = useState([]);
    const [searchedResult,setSearchedResult]= useState([]);
    const [txt,setTxt] = useState("");

    const addToDo = (toDo)=>{
        if(!toDo.value){
            return;
        }
        const newTasks = [toDo,...toDoItem];
        setToDoItem(newTasks);
    }
    const searchFilteredTodo = (searchtext)=>{
        setTxt(searchtext);
        const regex = new RegExp(searchtext, "i");
        const newResultsArr = toDoItem.filter(
          (item) =>
            regex.test(item.value)
        );
        setSearchedResult(newResultsArr);
    }
    const removeToDo = id =>{
        const newArr = [...toDoItem].filter(todo => todo.id !== id);
        console.log(newArr);
        setToDoItem(newArr);
    }
    const completedTodo = id =>{
        let upDatedToDo = toDoItem.map((toDo)=>{
            if(toDo.id === id){
                toDo.isDone=!toDo.isDone;
            }
            return toDo;
        })
        console.log(upDatedToDo);
        setToDoItem(upDatedToDo);
    }

  return (
    <div>
    <ToDoForm addToDo={addToDo} searchFilteredTodo={searchFilteredTodo} />
    { txt ? (<ToDoItems toDoItem={searchedResult} completedTodo={completedTodo} removeToDo={removeToDo} />):(
        <ToDoItems toDoItem={toDoItem} completedTodo={completedTodo} removeToDo={removeToDo} />
    )
    }
    </div>
  )
}

export default ToDoList
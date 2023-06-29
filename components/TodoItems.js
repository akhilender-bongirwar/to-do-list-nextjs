"use client"
import React from 'react'
import { MdDeleteForever,MdDone } from 'react-icons/md';


function ToDoItems({toDoItem,completedTodo,removeToDo}) {
  return  toDoItem.map((task,index)=>{
    return(
        <div className={task.isDone?"bg-gray-500 opacity-50 p-4 flex justify-between items-center m-4 shadow-lg":"bg-[#E49393] p-4 flex justify-between items-center m-4 shadow-lg"} key={index}>
            <div className='text-2xl'>{task.value}</div>
            <div className='gap-8 flex text-xl' key={task.id}>
            <MdDone onClick={()=>{completedTodo(task.id)}}></MdDone> 
            <MdDeleteForever onClick={()=>{removeToDo(task.id)}} ></MdDeleteForever>
            </div>
        </div>
        )
    })
  
}

export default ToDoItems
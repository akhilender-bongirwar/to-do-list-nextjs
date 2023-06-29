"use client"
import React, { useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md';

function ToDoForm(props) {
  const [input,setInput] = useState("");
  const [searchInp,setSearchInp] = useState("");
  const handleChange = (e)=>{
    setInput(e.target.value);
  }
  const handleSearchChange = (e)=>{
    setSearchInp(e.target.value);
    props.searchFilteredTodo(e.target.value);
  }

  const handleClick = (e)=>{
    e.preventDefault();
    console.log(props);
    props.addToDo({
        id:Math.floor(Math.random()*100000),
        value:input,
        isDone:false,
    })
    setInput("");
  }

  return (
    <form className='flex flex-wrap flex-col items-center w-full mt-10 text-2xl gap-2'>
        <div className='flex'>
        <input className='text-lg p-4 m-4 rounded-lg bg-[#FFEAD2]' type='text' placeholder='Enter a to-do-item....' name='tsk' onChange={handleChange} value={input} />
        <button type='submit' className='bg-[#F7E1AE] border border-black rounded-lg m-4 p-4 font-semibold text-lg cursor-pointer hover:text-black hover:bg-[#FFF8D6]' onClick={handleClick} >Submit</button>
        </div>
        <div className='flex m-2'>
        <input className='text-lg p-1 rounded-lg bg-[#FFEAD2]' type='text' placeholder='Search....' name='find' onChange={handleSearchChange} value={searchInp} />
        <MdOutlineSearch className='m-1'/>
        </div>
    </form>
  )
}

export default ToDoForm
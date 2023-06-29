"use client"
import ToDoList from "@/components/TodoList";


export default function Home() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
    <h1 className='flex items-center justify-center text-[#9E6F21]'>TO DO LIST</h1>
    <div className='flex justify-center  items-start border border-black w-[80%] min-h-80 mx-8 bg-[#FFEAEA] rounded-lg'>
      <ToDoList />
    </div>
    </section>
  )
}

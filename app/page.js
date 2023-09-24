"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [taskList, settaskList] = useState([]);
  
  const sumitHandler = (e) =>{
    e.preventDefault()
    console.log(task,desc)
    settaskList([...taskList,{task,desc}])
    settask("")
    setdesc("")
    console.log(taskList)
  }

const deleteHandler = (i) =>{
  let arr = [...taskList]
  arr.splice(i,1)
  settaskList(arr)
}




  let renderTasks = <h1 className='text-2pxl px-5 py-2 m-5'>No task availaable</h1>
  
  if (taskList.length > 0) 
  {
    renderTasks = taskList.map((t,i) =>{
      return <ul>
        <li key = {i}>
          <div className='flex justify-evenly font-semibold mb-5'>
            <h5>{t.task} </h5>
            <h5>{t.desc} </h5>
            <button 
            onClick={()=> {deleteHandler(i)}} 
            className='bg-red-400 rounded-md text-yellow-100'> Delete</button>
          </div> 
        </li>
      </ul>
    }
    )
    
  }
  return (
    <>
      <h1 className='bg-black text-white font-bold text-center text-5xl'>This is Todo List</h1>
      <form onSubmit={sumitHandler}>
        <input className='border-black-500 px-4 py-4 m-5 text-1xl font-black' placeholder='Enter your task'
        value={task} onChange={(e) => settask(e.target.value)}/>
        
        <input className='border-black-500 px-4 py-4 m-5 text-1xl font-black' placeholder='Enter Desciption'
        value={desc} onChange={(e) => setdesc(e.target.value)}/>
        
        <button className='bg-sky-500 text-black rounded-xl m-5 px-4 py-4'>Add me</button>
      </form>
      <div className='bg-slate-200 mb-5'>
        <ul>
        {renderTasks}
        </ul>
      </div>
      
      
    </>
  )
}

export default page
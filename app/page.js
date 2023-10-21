"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [main, setMain] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
    setMain([...main,{task, desc}])
    setTask("")
    setDesc("")
  }
  const deleteHandler = (i) => {
    let copy = [...main]
    copy.splice(i,1)
    setMain(copy)
  }

  let renderTask = <h2>No Tasks Available</h2>
  if(main.length>0){
    renderTask = main.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.task}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          {/* <button className='bg-green-500 text-white px-4 py-4 m-2 rounded'>EDIT</button> */}
          <button
          onClick={()=>{
            deleteHandler(i)
          }}
          className='bg-red-500 text-white px-3 py-4 m-2 rounded'>DELETE</button>
        </li>
      )
    })
  }
  return (
    <>
      <h4 className='bg-yellow-500 p-5 text-3xl font-bold text-center'>TO-DO LIST</h4>
      <form onSubmit={submitHandler}>
        <input type="text" 
        className='text-2xl border-zinc-800 border-4 m-12 px-4 py-2' 
        placeholder='Enter Your Task here'
        value={task}
        onChange={(e)=>{
          setTask(e.target.value)
        }}
        />
        <input type="text" 
        className='text-2xl border-zinc-800 border-4 m-12 px-4 py-2 w-96' 
        placeholder='Enter Your Description here'
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
        />
        <button className='bg-black text-white px-3 py-4 m-12 rounded'>ADD TASK</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
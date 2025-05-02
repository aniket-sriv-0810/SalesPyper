// src/components/TaskForm.jsx
import React, { useState } from 'react'
import { useTasks } from '../../context/TaskContext'
import {  FaPlusCircle } from 'react-icons/fa'

const AddTaskForm = () => {
  const { addTask } = useTasks()
  const [title, setTitle] = useState('')
  const [assignedTo, setAssignedTo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && assignedTo) {
      const newTask = {
        id: Date.now(),
        title,
        assignedTo,
        status: 'To Do',
      }

      addTask(newTask)
      setTitle('')
      setAssignedTo('')
    }
  }

  return (
    <>
     <h1 className="text-3xl font-bold mb-8 text-center text-gray-200" data-aos="fade-down">
       Add Task To Perform
      </h1>
    <div className="relative md:w-[30rem] md:h-[19rem] m-auto bg-gradient-to-tr from-gray-700 to-zinc-600  bg-opacity-10 backdrop-blur-xl rounded-3xl shadow-sm p-6 mb-8 overflow-hidden shadow-gray-100 border-opacity-20" data-aos="fade-up">
  
      <div className="relative z-10">
        <h2 className="flex justify-center items-center gap-3 text-2xl font-bold text-gray-100 mb-6 text-center">Add New Task <FaPlusCircle className='mt-.5 text-green-600 bg-white rounded-full'/> </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the task to perform"
              className=" px-4 py-2 rounded-xl bg-white  bg-opacity-60 border border-gray-300 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition placeholder:text-center placeholder:text-sm"
            />
            
            <input
              type="text"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder="Enter the name of the assigned person"
              className="px-4 py-2 rounded-xl bg-white bg-opacity-60 border border-gray-300 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition placeholder:text-center placeholder:text-sm"
            />
            <button
              type="submit"
              className="flex justify-center items-center gap-3 w-full py-3 mt-2 bg-gradient-to-tr from-teal-700 to-green-500 text-white font-semibold rounded-xl shadow-md hover:from-green-700 hover:to-teal-600 hover:cursor-pointer transition duration-300"
            >
              Add Task
              <FaPlusCircle className='mt-.5'/>
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  
  )
}

export default AddTaskForm

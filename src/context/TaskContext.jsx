// src/context/TaskContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'
import { mockTasks } from '../data/mockTasks.js' // <--- Your demo data is imported here

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  // Load tasks from localStorage or use mock data
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)) // Load tasks from localStorage
    } else {
      setTasks(mockTasks) // Fallback to mock data if nothing is saved in localStorage
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks])

  // Function to add a new task
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask] // Add new task to the list
    setTasks(updatedTasks) // Update state
  }

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => useContext(TaskContext)

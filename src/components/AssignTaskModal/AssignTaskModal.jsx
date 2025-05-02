// src/components/AssignTaskModal.jsx
import { useState } from 'react'
import { useTasks } from '../../context/TaskContext'
import { FaUserPlus } from 'react-icons/fa'

const users = [ 'Aniket Srivastava','Gopal Shukla', 'Sandy Verma', 'Palak Singh', 'Vartika Singh' , 'Mahesh Sharma' , 'Chandan Gupta' , 'Tina Mehta'] // Dummy users

const AssignTaskModal = ({ task, onClose }) => {
  const { tasks, setTasks } = useTasks()
  const [selectedUser, setSelectedUser] = useState(task.assignedTo || '')

  const handleAssign = () => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id ? { ...t, assignedTo: selectedUser } : t
    )
    setTasks(updatedTasks)
    onClose()
  }

  return (
    <>

    <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-xs px-4">
      <div className="w-full max-w-md p-6 rounded-2xl bg-gray-100 shadow-gray-700 bg-opacity-30 backdrop-blur-md border border-black/20 shadow-2xl animate-fade-in transition-all">
        <div className="flex items-center gap-2 mb-4">
          <FaUserPlus className="text-green-600 text-xl" />
          <h3 className="text-lg font-semibold text-gray-800">Task to Perform : <span className='font-bold capitalize text-green-600'> {task.title} </span></h3>
        </div>

        <label className="block text-sm text-gray-700 mb-2">Assign task to:</label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="w-full px-2 py-2 border border-gray-300 rounded-lg bg-gray-50 font-semibold text-green-600 text-center bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-green-400 hover:cursor-pointer"
        >
          {users.map(user => (
            <option key={user} value={user} className='text-gray-700 hover:cursor-pointer'>
              {user}
            </option>
          ))}
        </select>

        <div className="flex flex-col sm:flex-row gap-4 justify-end mt-6">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-sm font-medium rounded-lg text-white bg-red-500 hover:bg-red-600 hover:cursor-pointer transition"
          >
            Cancel
          </button>
          <button
            onClick={handleAssign}
            className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-green-700 hover:cursor-pointer  transition"
          >
            Assign
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default AssignTaskModal

import { useState } from 'react'
import { useTasks } from '../../context/TaskContext'
import { FaUserEdit} from 'react-icons/fa'
import AssignTaskModal from '../AssignTaskModal/AssignTaskModal'
const TaskRow = ({ task }) => {
  const { tasks, setTasks } = useTasks()
  const [showModal, setShowModal] = useState(false)

  const updateStatus = (e) => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id ? { ...t, status: e.target.value } : t
    )
    setTasks(updatedTasks)
  }

  return (
    <>
      <tr className="text-center transition duration-300 bg-gray-100 bg-opacity-30 hover:bg-opacity-60 backdrop-blur-md shadow-sm hover:bg-cyan-50">
        <td className="py-4 px-4 font-medium capitalize text-gray-800">{task.title}</td>
        <td className="py-4 px-4 flex justify-center items-center gap-4 mt-2 text-zinc-600 font-medium transition">
          {task.assignedTo}
          <FaUserEdit
            onClick={() => setShowModal(true)}
            className="text-base hover:text-green-500 hover:cursor-pointer hover:scale-120"
          />
        </td>
        <td className="py-4 px-4">
          <select
            value={task.status}
            onChange={updateStatus}
            className={`
              px-3 py-2 hover:cursor-pointer font-semibold bg-opacity-50 backdrop-blur-md 
              border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 transition
              ${task.status === 'Done' ? 'text-green-500 border-2 border-green-600' : ''}
              ${task.status === 'In Progress' ? 'text-yellow-600 border-2 border-yellow-600' : ''}
              ${task.status === 'To Do' ? 'text-red-500 border-2 border-red-600' : ''}
              focus:ring-indigo-400
            `}
          >
            <option className=" text-red-500 font-semibold">To Do</option>
            <option className=" text-yellow-600 font-semibold">In Progress</option>
            <option className=" text-green-600 font-semibold">Done</option>
          </select>
        </td>
      </tr>
<>
      {showModal && <AssignTaskModal task={task} onClose={() => setShowModal(false)} />}
</>
    </>
  )
}

export default TaskRow
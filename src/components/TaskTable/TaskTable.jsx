// src/components/TaskTable.jsx
import { useState } from 'react'
import { useTasks } from '../../context/TaskContext'
import TaskRow from './TaskRow'

const TaskTable = () => {
  const { tasks } = useTasks()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = tasks.filter(task => {
    const matchesTitle = task.title.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = filter === 'All' || task.status === filter
    return matchesTitle && matchesStatus
  })

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-100" data-aos="fade-down">
        My Tasks Dashboard
      </h1>

      <div className="bg-gray-600 bg-opacity-20 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/20" data-aos="fade-up">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="🔍 Search your tasks with help of title..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full m-2 sm:w-1/2 px-4 py-2.5 rounded-xl bg-white bg-opacity-60 border border-gray-300 placeholder-gray-500 text-gray-800 text-sm focus:ring-2 focus:ring-green-300 outline-none transition"
          />
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="px-3 py-3 rounded-xl bg-white bg-opacity-60 border border-gray-300 text-sm text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition hover:cursor-pointer"
          >
            <option className="text-zinc-500">All</option>
            <option className="text-red-500 font-semibold">To Do</option>
            <option className="text-yellow-600 font-semibold">In Progress</option>
            <option className="text-green-600 font-semibold">Done</option>
          </select>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-sm">
          <table className="w-full table-auto border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-gray-800 text-sm text-gray-100 uppercase text-center tracking-widest">
                <th className="py-3 px-4 text-center">Title of task</th>
                <th className="py-3 px-4 text-center">Assigned To</th>
                <th className="py-3 px-4 text-center">Status of task</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {filtered.length > 0 ? (
                filtered.map(task => <TaskRow key={task.id} task={task} />)
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-lg py-6 text-gray-100 font-medium italic">
                     No tasks found matching your task description.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TaskTable

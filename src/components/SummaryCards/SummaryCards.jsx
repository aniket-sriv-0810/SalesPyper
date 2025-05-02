import { useTasks } from '../../context/TaskContext'
import { FaTasks, FaCheckCircle, FaHourglassHalf } from 'react-icons/fa'

const SummaryCards = () => {
  const { tasks } = useTasks()

  if (tasks.length === 0) {
    return (
      <div className="text-center text-lg font-semibold text-gray-500">
        Sorry! No tasks available
      </div>
    )
  }

  const total = tasks.length
  const completed = tasks.filter(t => t.status === 'Done').length
  const pending = tasks.filter(t => t.status !== 'Done').length

  const cards = [
    {
      title: 'Total Tasks',
      value: total,
      icon: <FaTasks className="text-4xl text-white" />,
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      title: 'Completed Tasks',
      value: completed,
      icon: <FaCheckCircle className="text-4xl text-white" />,
      gradient: 'from-green-500 to-teal-700',
    },
    {
      title: 'Pending Tasks',
      value: pending,
      icon: <FaHourglassHalf className="text-4xl text-white" />,
      gradient: 'from-yellow-400 to-pink-500',
    },
  ]

  return (
    <>
      <h1 className="text-2xl font-bold mt-8 mb-10 text-center text-gray-200" data-aos="fade-down">
        My Task Dashboard Stats
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={` relative bg-gradient-to-br ${card.gradient}  text-white 
              p-6 rounded-3xl shadow-sm overflow-hidden 
              transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-200`}
          data-aos="fade-up">
            {/* Glass Effect Overlay */}
            <div className="absolute inset-0  bg-opacity-10 backdrop-blur-[10px] rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold tracking-wide">{card.title}</h3>
              <p className="text-5xl font-bold mt-2 drop-shadow">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SummaryCards

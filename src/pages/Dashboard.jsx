import React , {useEffect} from "react";
import TaskTable from "../components/TaskTable/TaskTable";
import SummaryCards from '../components/SummaryCards/SummaryCards';
import Navbar from "../components/Navbar/Navbar";
import AddTaskForm from "../components/AddTaskForm/AddTaskForm";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Dashboard() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      mirror: true,
      once: false,
    });
  }, []);
  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-t from-green-500 via-teal-600 to-gray-800 min-h-screen p-4 md:p-8 ">
    <div className="mb-28" >
    <SummaryCards/>
    </div>
    <div className="mb-28">
    <AddTaskForm/>
    </div>
    <div className="mb-20">
      <TaskTable/>
    </div>
    </div>
    </>
  )
}

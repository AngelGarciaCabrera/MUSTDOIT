import React, { useEffect, useState } from 'react';
import { PlusCircle, Clock, CheckCircle, XCircle, 
         Bell,  Search, MoreVertical, Edit, Trash2, ArrowUpRight, 
         } from 'lucide-react';
import SidebarMenu from './Sidebar';
import UserProyects from './UserProyects';
import { getEntity } from '../db/supabase/supabaseFunctions';

const Dashboard = () => {
  const [user, setUser] = useState(null);

const getUser = async () => {
  const  tablaName ='user'
  const id ='1'
    try {
        getEntity(tablaName,id,setUser)
    } catch (error) {
       console.log('error al buscar al usuario')
    }
};

useEffect(() => {
  const fetchUser = async () => {
      await getUser();
  };
  fetchUser();
}, []);

  // Sample projects data
  const [projects, setProjects] = useState([
    { id: 1, name: "Rediseño de sitio web", status: "En progreso", deadline: "15 Mar", completion: 65, priority: "Alta", team: ["AG", "MR", "JL"] },
    { id: 2, name: "Campaña de marketing", status: "Pendiente", deadline: "22 Mar", completion: 30, priority: "Media", team: ["AG", "PT"] },
    { id: 3, name: "Desarrollo de API", status: "Completado", deadline: "10 Mar", completion: 100, priority: "Alta", team: ["AG", "LM"] },
    { id: 4, name: "Optimización SEO", status: "En progreso", deadline: "28 Mar", completion: 45, priority: "Baja", team: ["AG"] }
  ]);

  // Sample tasks data
  const [tasks, setTasks] = useState([
    { id: 1, text: "Reunión con cliente", completed: false, dueDate: "Hoy", project: "Rediseño de sitio web" },
    { id: 2, text: "Actualizar documentación", completed: false, dueDate: "Mañana", project: "Desarrollo de API" },
    { id: 3, text: "Revisar diseños", completed: false, dueDate: "15 Mar", project: "Rediseño de sitio web" },
    { id: 4, text: "Preparar presentación", completed: false, dueDate: "18 Mar", project: "Campaña de marketing" }
  ]);

  // Sample metrics data
  const metrics = [
    { name: "Tareas completadas", value: "12/20", change: "+4", status: "positive" },
    { name: "Proyectos activos", value: "4", change: "+1", status: "positive" },
    { name: "Tiempo promedio", value: "3.5d", change: "-0.5", status: "positive" }
  ];

  // Project filter state
  const [filter, setFilter] = useState("Todos");



  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };




  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      
      {/* Sidebar */}
      <SidebarMenu user={user} />
      
      {/* Main content */}
      <div className="flex-1 overflow-auto  dark:bg-grid-white/[0.08] bg-grid-black/[0.07]">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">Bienvenido, {user ? user.name : "No hay usuario"}</h1>
              <p className="text-gray-400">Aquí está el resumen de tu trabajo</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  className="bg-gray-900 border border-gray-800 rounded-lg py-2 pl-10 pr-3 text-sm focus:outline-none focus:border-gray-700"
                />
              </div>
              <button className="bg-gray-900 hover:bg-gray-800 p-2 rounded-lg border border-gray-800">
                <Bell size={18} />
              </button>
            </div>
          </div>

          {/* Metrics section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-gray-400 text-sm">{metric.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    metric.status === 'positive' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <p className="text-2xl font-bold" style={{ color: "#d946ef" }}>{metric.value}</p>
              </div>
            ))}
          </div>
          
          {/* Projects section */}
          <UserProyects projects={projects}  setProjects={setProjects} filter={filter} setFilter={setFilter} />
        
          
          {/* Tasks section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium text-gray-400">Tareas pendientes</h2>
              <button 
                className="flex items-center space-x-2 text-sm px-3 py-1 rounded-lg border border-gray-800 hover:border-gray-700 transition"
                style={{ color: "#d946ef" }}
              >
                <PlusCircle size={16} />
                <span>Añadir tarea</span>
              </button>
            </div>
            
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              {tasks.map((task, index) => (
                <div 
                  key={task.id} 
                  className={`p-4 flex items-center space-x-4 ${
                    index < tasks.length - 1 ? 'border-b border-gray-800' : ''
                  } hover:bg-gray-800 transition-colors`}
                >
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="flex-shrink-0"
                  >
                    {task.completed ? (
                      <CheckCircle size={20} style={{ color: "#d946ef" }} />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-600 hover:border-pink-500 transition-colors"></div>
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
                    <div className="flex space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{task.project}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className={`text-xs ${
                        task.dueDate === "Hoy" ? "text-red-400" :
                        task.dueDate === "Mañana" ? "text-yellow-400" : "text-gray-500"
                      }`}>
                        {task.dueDate}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-white">
                      <Edit size={16} />
                    </button>
                    <button className="text-gray-500 hover:text-red-400">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
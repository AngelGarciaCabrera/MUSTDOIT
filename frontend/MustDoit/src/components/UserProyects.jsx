import React, { useState } from 'react';
import { PlusCircle, Clock, CheckCircle, XCircle, 
         Bell,  Search, MoreVertical, Edit, Trash2, ArrowUpRight, 
         } from 'lucide-react';
const UserProyects =({projects,setProjects,filter,setFilter})=>{
     const [draggedProject, setDraggedProject] = useState(null);

     
  // Handle project drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

    // Handle project drag start
  const handleDragStart = (e, projectId) => {
    setDraggedProject(projectId);
    // Make the drag image transparent
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    e.dataTransfer.setDragImage(img, 0, 0);
  };

        // Handle project drop
  const handleDrop = (e, targetProjectId) => {
    e.preventDefault();
    
    if (draggedProject !== targetProjectId) {
      // Find positions of dragged and target project
      const draggedIndex = projects.findIndex(p => p.id === draggedProject);
      const targetIndex = projects.findIndex(p => p.id === targetProjectId);
      
      // Create new projects array with reordered items
      const newProjects = [...projects];
      const [removed] = newProjects.splice(draggedIndex, 1);
      newProjects.splice(targetIndex, 0, removed);
      
      setProjects(newProjects);
    }
    
    setDraggedProject(null);
  };
    return(<>
      {/* Projects section */}
      <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium text-gray-400">Proyectos recientes</h2>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setFilter("Todos")}
                  className={`px-3 py-1 text-sm rounded-lg ${
                    filter === "Todos" ? 'bg-gray-800' : 'hover:bg-gray-900'
                  }`}
                >
                  Todos
                </button>
                <button 
                  onClick={() => setFilter("En progreso")}
                  className={`px-3 py-1 text-sm rounded-lg ${
                    filter === "En progreso" ? 'bg-gray-800' : 'hover:bg-gray-900'
                  }`}
                >
                  En progreso
                </button>
                <button 
                  onClick={() => setFilter("Completado")}
                  className={`px-3 py-1 text-sm rounded-lg ${
                    filter === "Completado" ? 'bg-gray-800' : 'hover:bg-gray-900'
                  }`}
                >
                  Completados
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects
                .filter(p => filter === "Todos" || p.status === filter)
                .map(project => (
                <div 
                  key={project.id} 
                  className={`bg-gray-900 rounded-lg p-4 border border-gray-800 cursor-move ${
                    draggedProject === project.id ? 'opacity-50' : ''
                  }`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, project.id)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, project.id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium" style={{ color: "#d946ef" }}>{project.name}</h3>
                    <div className="relative group">
                      <button className="text-gray-400 hover:text-white">
                        <MoreVertical size={16} />
                      </button>
                      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-1 z-10 hidden group-hover:block">
                        <a href="#" className="px-4 py-2 text-sm flex items-center space-x-2 hover:bg-gray-700">
                          <Edit size={14} />
                          <span>Editar proyecto</span>
                        </a>
                        <a href="#" className="px-4 py-2 text-sm flex items-center space-x-2 hover:bg-gray-700">
                          <ArrowUpRight size={14} />
                          <span>Abrir proyecto</span>
                        </a>
                        <a href="#" className="px-4 py-2 text-sm flex items-center space-x-2 hover:bg-gray-700 text-red-400">
                          <Trash2 size={14} />
                          <span>Eliminar proyecto</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.status === "En progreso" ? "bg-blue-900 text-blue-400" :
                      project.status === "Completado" ? "bg-green-900 text-green-400" :
                      "bg-yellow-900 text-yellow-400"
                    }`}>
                      {project.status}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Clock size={14} />
                      <span>{project.deadline}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progreso</span>
                      <span>{project.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500 ease-in-out"
                        style={{ 
                          width: `${project.completion}%`,
                          background: "linear-gradient(to right, #d946ef, #ec4899)" 
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {project.team.map((member, index) => (
                        <div 
                          key={index}
                          className="w-7 h-7 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs"
                        >
                          {member}
                        </div>
                      ))}
                    </div>
                    
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.priority === "Alta" ? "bg-red-900/50 text-red-400" :
                      project.priority === "Media" ? "bg-yellow-900/50 text-yellow-400" :
                      "bg-green-900/50 text-green-400"
                    }`}>
                      {project.priority}
                    </span>
                  </div>
                </div>
              ))}
              
              <div className="bg-black rounded-lg p-4 border border-gray-800 border-dashed flex items-center justify-center hover:border-gray-700 transition cursor-pointer group">
                <div className="flex flex-col items-center space-y-2 group-hover:scale-105 transition-transform">
                  <div className="p-2 rounded-full bg-gray-900 group-hover:bg-gray-800 transition-colors">
                    <PlusCircle size={24} style={{ color: "#d946ef" }} />
                  </div>
                  <span className="text-gray-400">Nuevo proyecto</span>
                </div>
              </div>
            </div>
          </div>
    </>)
}

export default UserProyects;
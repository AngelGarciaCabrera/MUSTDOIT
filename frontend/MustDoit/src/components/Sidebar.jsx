import React, { useState } from 'react';
import { User, Briefcase, CheckSquare, LogOut, ChevronDown, PlusCircle, Clock, CheckCircle, XCircle, 
         Bell, Settings, BarChart2, Calendar, Search, MoreVertical, Edit, Trash2, ArrowUpRight } from 'lucide-react';

const SidebarMenu =({user})=>{
 
    return(<>
    <div className="w-64 border-r border-gray-800 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Workspaces</h1>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-white">
              <Bell size={18} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Settings size={18} />
            </button>
          </div>
        </div>
        
        {/* User profile section */}
        <div className="p-4 border-y border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt="Profile" 
                className="w-10 h-10 rounded-full"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
            </div>
            <div>
              <h2 className="font-medium" style={{ color: "#d946ef" }}>{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 p-4">
          <div className="mb-4">
            <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2 font-semibold">Options</h3>
            <div className="space-y-1">
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-gray-900">
                <Briefcase size={18} style={{ color: "#d946ef" }} />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x- 3 p-3 rounded-lg hover:bg-gray-900 transition">
                <BarChart2 size={18} className="text-gray-400" />
                <span>Estadísticas</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 transition">
                <Calendar size={18} className="text-gray-400" />
                <span>Calendario</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 transition">
                <User size={18} className="text-gray-400" />
                <span>Perfil</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 transition">
                <CheckSquare size={18} className="text-gray-400" />
                <span>Tareas</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 transition">
                <Settings size={18} className="text-gray-400" />
                <span>Configuración</span>
              </a>
            </div>
          </div>

       
        </div>
        
        {/* Logout option */}
        <div className="p-4 border-t border-gray-800">
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 transition">
            <LogOut size={18} className="text-gray-400" />
            <span>Cerrar sesión</span>
          </a>
        </div>
      </div></>)
}

export default SidebarMenu;
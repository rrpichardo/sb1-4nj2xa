import React from 'react';
import { Bell, Settings } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/':
        return 'Dashboard';
      case '/nueva-instalacion':
        return 'Nueva Instalación';
      case '/nueva-inspeccion':
        return 'Nueva Inspección';
      case '/instalaciones':
        return 'Instalaciones';
      case '/inspecciones':
        return 'Inspecciones';
      case '/configuracion':
        return 'Configuración';
      default:
        return 'MotorGate Pro';
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">{getPageTitle(currentPath)}</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Carlos Rodriguez</p>
              <p className="text-xs text-gray-500">Técnico Senior</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
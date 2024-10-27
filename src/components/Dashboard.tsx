import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, ClipboardList, AlertCircle, CheckCircle, Search } from 'lucide-react';
import StatsCard from './StatsCard';
import RecentForms from './RecentForms';

export default function Dashboard() {
  const navigate = useNavigate();
  
  const stats = [
    { title: 'Total Instalaciones', value: '156', icon: ClipboardList },
    { title: 'Inspecciones Pendientes', value: '8', icon: AlertCircle },
    { title: 'Completadas este mes', value: '24', icon: CheckCircle },
  ];

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/nueva-instalacion')}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Nuevo Registro de Instalación
        </button>
        <button
          onClick={() => navigate('/nueva-inspeccion')}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Nueva Inspección
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Registros Recientes</h2>
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar registros..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <RecentForms />
        </div>
      </div>
    </div>
  );
}
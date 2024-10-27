import React from 'react';
import { Settings, Home, ClipboardList, Search, LogOut } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: ClipboardList, label: 'Instalaciones', href: '/instalaciones' },
    { icon: Search, label: 'Inspecciones', href: '/inspecciones' },
    { icon: Settings, label: 'Configuración', href: '/configuracion' },
    { icon: LogOut, label: 'Cerrar Sesión', href: '/logout' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar navItems={navItems} currentPath={location.pathname} />
      <div className="ml-64">
        <Header currentPath={location.pathname} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
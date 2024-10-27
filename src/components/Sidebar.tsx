import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface SidebarProps {
  navItems: NavItem[];
  currentPath: string;
}

export default function Sidebar({ navItems, currentPath }: SidebarProps) {
  const isActive = (href: string) => {
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    return false;
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white">
      <div className="p-6">
        <h2 className="text-xl font-bold">MotorGate Pro</h2>
      </div>
      <nav className="mt-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
              isActive(item.href)
                ? 'bg-gray-800 text-white border-l-4 border-blue-500'
                : ''
            }`}
          >
            <item.icon className={`w-5 h-5 mr-3 ${isActive(item.href) ? 'text-blue-500' : ''}`} />
            <span className={isActive(item.href) ? 'font-medium' : ''}>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
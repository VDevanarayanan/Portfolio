
import React from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-400/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-purple-600/20 text-purple-300'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname.startsWith(path);
    return isActive
      ? 'text-primary'
      : 'text-gray-500 dark:text-gray-400';
  };

  const getIconStyle = (path: string) => {
    const isActive = location.pathname.startsWith(path);
    return isActive ? 'filled' : '';
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-200 bg-background-light/90 px-4 pb-4 pt-2 backdrop-blur-lg dark:border-gray-800 dark:bg-background-dark/90">
      <div className="flex h-12 items-center justify-around">
        <button
          onClick={() => navigate('/feed')}
          className={`flex flex-col items-center gap-1 ${getLinkClass('/feed')}`}
        >
          <span className={`material-symbols-outlined ${getIconStyle('/feed')}`}>home</span>
          <span className={`text-xs ${location.pathname === '/feed' ? 'font-bold' : ''}`}>Inicio</span>
        </button>

        <button
          onClick={() => navigate('/challenges')}
          className={`flex flex-col items-center gap-1 ${getLinkClass('/challenges')}`}
        >
          <span className={`material-symbols-outlined ${getIconStyle('/challenges')}`}>terminal</span>
          <span className={`text-xs ${location.pathname.startsWith('/challenges') ? 'font-bold' : ''}`}>Retos</span>
        </button>

        <button
          onClick={() => navigate('/ranking')}
          className={`flex flex-col items-center gap-1 ${getLinkClass('/ranking')}`}
        >
          <span className={`material-symbols-outlined ${getIconStyle('/ranking')}`}>leaderboard</span>
          <span className={`text-xs ${location.pathname === '/ranking' ? 'font-bold' : ''}`}>Ranking</span>
        </button>

        <button
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center gap-1 ${getLinkClass('/profile')}`}
        >
          <span className={`material-symbols-outlined ${getIconStyle('/profile')}`}>person</span>
          <span className={`text-xs ${location.pathname === '/profile' ? 'font-bold' : ''}`}>Perfil</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center"></div>
        <h1 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Perfil
        </h1>
        <div className="flex w-auto items-center justify-end">
          <button
            onClick={handleLogout}
            className="text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0 hover:underline"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-zinc-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                Ana Torres
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-base font-normal leading-normal text-center">
                @anatorres
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-white dark:bg-background-dark dark:border-zinc-800 p-6 border border-zinc-200/80 shadow-sm">
          <p className="text-zinc-900 dark:text-white text-base font-medium leading-normal">Racha más larga</p>
          <p className="text-zinc-900 dark:text-white tracking-light text-2xl font-bold leading-tight">42 días</p>
        </div>
      </div>
      <div className="px-4 py-2 pb-24">
        <div className="flex flex-col bg-white dark:bg-background-dark rounded-xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden shadow-sm">
          <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="text-zinc-900 dark:text-white flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0 size-12">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-zinc-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
                  Nombres y Apellidos
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal leading-normal line-clamp-2">
                  Ana Torres
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <div className="text-zinc-900 dark:text-white flex size-7 items-center justify-center">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between border-b border-zinc-200/80 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="text-zinc-900 dark:text-white flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0 size-12">
                <span className="material-symbols-outlined">work</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-zinc-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
                  Trabajo
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal leading-normal line-clamp-2">
                  Estudiante
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <div className="text-zinc-900 dark:text-white flex size-7 items-center justify-center">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div className="text-zinc-900 dark:text-white flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0 size-12">
                <span className="material-symbols-outlined">school</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-zinc-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
                  Institución
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal leading-normal line-clamp-2">
                  Universidad Nacional
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <div className="text-zinc-900 dark:text-white flex size-7 items-center justify-center">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Profile;
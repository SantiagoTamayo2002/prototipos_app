import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Challenges: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'new' | 'solved'>('new');

  return (
    <div className="relative mx-auto flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <header className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 px-4 pt-4 pb-2 backdrop-blur-sm justify-between">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-[#0d121b] dark:text-white">menu</span>
        </div>
        <h1 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Mis Retos
        </h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#0d121b] dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <main className="flex-1 pb-24">
        <div className="flex flex-col gap-3 p-4 pt-2">
          <div className="flex justify-between items-center gap-6">
            <p className="text-[#0d121b] dark:text-white text-base font-medium leading-normal">Puntuación Total</p>
            <p className="text-[#0d121b] dark:text-white text-sm font-bold leading-normal">7500 pts</p>
          </div>
          <div className="w-full rounded-full bg-primary/20 h-2">
            <div className="h-2 rounded-full bg-primary" style={{ width: '75%' }}></div>
          </div>
          <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">Nivel: Intermedio</p>
        </div>

        <div className="sticky top-[68px] z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="flex border-b border-[#cfd7e7] dark:border-gray-700 px-4 justify-between">
            <button
              onClick={() => setActiveTab('new')}
              className={`flex flex-1 flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                activeTab === 'new'
                  ? 'border-b-primary text-[#0d121b] dark:text-white'
                  : 'border-b-transparent text-[#4c669a] dark:text-gray-400'
              }`}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Nuevos</p>
            </button>
            <button
              onClick={() => setActiveTab('solved')}
              className={`flex flex-1 flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                activeTab === 'solved'
                  ? 'border-b-primary text-[#0d121b] dark:text-white'
                  : 'border-b-transparent text-[#4c669a] dark:text-gray-400'
              }`}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Resueltos</p>
            </button>
            <button
              onClick={() => navigate('/challenges/submissions')}
              className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4c669a] dark:text-gray-400 pb-[13px] pt-4"
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Envíos</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4">
          {activeTab === 'new' && (
            <>
              {/* Challenge Item 1 */}
              <div className="flex items-center gap-4 bg-white dark:bg-background-dark rounded p-4 min-h-[72px] justify-between shadow-sm shadow-slate-200/50 dark:border dark:border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="text-easy flex items-center justify-center rounded-lg bg-easy/20 shrink-0 size-12">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#0d121b] dark:text-white text-base font-medium leading-normal line-clamp-1">
                      Suma de dos números
                    </p>
                    <p className="text-easy text-sm font-normal leading-normal line-clamp-2">Dificultad: Fácil</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <button
                    onClick={() => navigate('/challenges/detail/1')}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-primary/20 text-primary text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Detalle</span>
                  </button>
                </div>
              </div>

               {/* Challenge Item 2 */}
              <div className="flex items-center gap-4 bg-white dark:bg-background-dark rounded p-4 min-h-[72px] justify-between shadow-sm shadow-slate-200/50 dark:border dark:border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="text-medium flex items-center justify-center rounded-lg bg-medium/20 shrink-0 size-12">
                     <span className="material-symbols-outlined">data_object</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#0d121b] dark:text-white text-base font-medium leading-normal line-clamp-1">
                      Invertir Árbol Binario
                    </p>
                    <p className="text-medium text-sm font-normal leading-normal line-clamp-2">Dificultad: Media</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <button
                    onClick={() => navigate('/challenges/detail/2')}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-primary/20 text-primary text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">Detalle</span>
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'solved' && (
            <>
              {/* Solved Challenge Item 1 */}
              <div className="flex flex-col items-stretch justify-start rounded-lg bg-white dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:border dark:border-gray-800">
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-4">
                  <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">Python</p>
                  <p className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                    Validación de Palíndromos
                  </p>
                  <div className="flex items-center gap-3 justify-between mt-2">
                    <p className="text-[#4c669a] dark:text-gray-400 text-base font-normal leading-normal">+150 pts</p>
                    <button
                      onClick={() => navigate('/challenges/submissions')}
                      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-medium leading-normal"
                    >
                      <span className="truncate">Observar envíos</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Solved Challenge Item 2 */}
               <div className="flex flex-col items-stretch justify-start rounded-lg bg-white dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:border dark:border-gray-800">
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-4">
                  <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">JavaScript</p>
                  <p className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                    Inversión de Cadena de Texto
                  </p>
                  <div className="flex items-center gap-3 justify-between mt-2">
                    <p className="text-[#4c669a] dark:text-gray-400 text-base font-normal leading-normal">+100 pts</p>
                    <button
                      onClick={() => navigate('/challenges/submissions')}
                      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-medium leading-normal"
                    >
                      <span className="truncate">Observar envíos</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Challenges;

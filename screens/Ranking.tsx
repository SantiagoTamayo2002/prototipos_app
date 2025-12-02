import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Ranking: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 p-4 pb-2 backdrop-blur-sm">
        <button
          onClick={() => navigate('/feed')}
          className="flex size-12 shrink-0 items-center justify-center text-[#0d121b] dark:text-white"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="flex-1 pr-12 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-[#0d121b] dark:text-white">
          Ranking de Usuarios
        </h1>
      </header>
      <main className="flex-grow pb-32">
        {/* Top 3 Podium Section */}
        <section className="grid grid-cols-[1fr_1.25fr_1fr] items-end gap-3 p-4">
          {/* 2nd Place */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="relative">
              <div
                className="h-20 w-20 rounded-full border-4 border-[#C0C0C0] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")',
                }}
              ></div>
              <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#C0C0C0]">
                <span className="material-symbols-outlined text-lg text-white">workspace_premium</span>
              </div>
            </div>
            <p className="text-base font-medium leading-normal text-[#0d121b] dark:text-white">Sarah L.</p>
            <p className="text-sm font-normal leading-normal text-[#4c669a] dark:text-gray-400">11800 pts</p>
            <p className="text-sm font-normal leading-normal text-[#4c669a] dark:text-gray-400">145 retos | JS</p>
          </div>
          {/* 1st Place */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="relative">
              <div
                className="h-28 w-28 rounded-full border-4 border-[#FFD700] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")',
                }}
              ></div>
              <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700]">
                <span className="material-symbols-outlined text-xl text-white">workspace_premium</span>
              </div>
            </div>
            <p className="text-base font-medium leading-normal text-[#0d121b] dark:text-white">Mike D.</p>
            <p className="text-sm font-normal leading-normal text-[#4c669a] dark:text-gray-400">12500 pts</p>
            <p className="text-sm font-normal leading-normal text-[#4c669a] dark:text-gray-400">150 retos | Python</p>
          </div>
          {/* 3rd Place */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="relative">
              <div
                className="h-20 w-20 rounded-full border-4 border-[#CD7F32] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")',
                }}
              ></div>
              <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#CD7F32]">
                <span className="material-symbols-outlined text-lg text-white">workspace_premium</span>
              </div>
            </div>
            <p className="text-base font-medium leading-normal text-[#0d121b] dark:text-white">Ken T.</p>
            <p className="text-sm font-normal leading-normal text-[#4c669a] dark:text-gray-400">11500 pts</p>
            <p className="text-sm font-normal leading-normal text-[#4c669a] dark:text-gray-400">142 retos | C++</p>
          </div>
        </section>
        <div className="h-2"></div>
        {/* Ranking List */}
        <div className="flex flex-col gap-px px-4">
          {/* List Item 4 */}
          <div className="flex min-h-[72px] items-center gap-4 rounded-t-lg bg-white dark:bg-background-dark/50 px-4 py-2 border-b border-gray-100 dark:border-gray-800">
            <p className="w-6 text-center text-base font-normal leading-normal text-[#4c669a] dark:text-gray-400">4</p>
            <div
              className="bg-cover bg-center bg-no-repeat aspect-square h-14 w-14 rounded-full"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")',
              }}
            ></div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-[#0d121b] dark:text-white">
                John P.
              </p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#4c669a] dark:text-gray-400">
                11200 pts
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-xs">
              <span className="rounded-full bg-primary/20 px-2.5 py-1 text-primary dark:bg-primary/30 dark:text-white">
                140 retos
              </span>
              <span className="rounded-full bg-slate-200 px-2.5 py-1 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                Java
              </span>
            </div>
          </div>
          {/* List Item 5 */}
          <div className="flex min-h-[72px] items-center gap-4 bg-white dark:bg-background-dark/50 px-4 py-2 border-b border-gray-100 dark:border-gray-800">
            <p className="w-6 text-center text-base font-normal leading-normal text-[#4c669a] dark:text-gray-400">5</p>
            <div
              className="bg-cover bg-center bg-no-repeat aspect-square h-14 w-14 rounded-full"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")',
              }}
            ></div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-[#0d121b] dark:text-white">
                Emily R.
              </p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#4c669a] dark:text-gray-400">
                10900 pts
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-xs">
              <span className="rounded-full bg-primary/20 px-2.5 py-1 text-primary dark:bg-primary/30 dark:text-white">
                135 retos
              </span>
              <span className="rounded-full bg-slate-200 px-2.5 py-1 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                Go
              </span>
            </div>
          </div>
          {/* List Item 6 */}
          <div className="flex min-h-[72px] items-center gap-4 rounded-b-lg bg-white dark:bg-background-dark/50 px-4 py-2">
            <p className="w-6 text-center text-base font-normal leading-normal text-[#4c669a] dark:text-gray-400">6</p>
            <div
              className="bg-cover bg-center bg-no-repeat aspect-square h-14 w-14 rounded-full"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")',
              }}
            ></div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-[#0d121b] dark:text-white">
                Lisa K.
              </p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#4c669a] dark:text-gray-400">
                10500 pts
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-xs">
              <span className="rounded-full bg-primary/20 px-2.5 py-1 text-primary dark:bg-primary/30 dark:text-white">
                130 retos
              </span>
              <span className="rounded-full bg-slate-200 px-2.5 py-1 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                Ruby
              </span>
            </div>
          </div>
        </div>
      </main>
      {/* Sticky Current User Bar */}
      <div className="fixed bottom-[64px] left-0 right-0 z-10 px-4 pb-4">
        <div className="flex min-h-[72px] items-center gap-4 rounded-lg border-2 border-primary bg-white/90 p-4 py-2 shadow-lg backdrop-blur-sm dark:border-primary dark:bg-background-dark/90">
          <p className="w-6 text-center text-base font-bold leading-normal text-primary">27</p>
          <div
            className="bg-cover bg-center bg-no-repeat aspect-square h-14 w-14 rounded-full"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")',
            }}
          ></div>
          <div className="flex flex-1 flex-col justify-center">
            <p className="line-clamp-1 text-base font-medium leading-normal text-[#0d121b] dark:text-white">Tú</p>
            <p className="line-clamp-2 text-sm font-normal leading-normal text-[#4c669a] dark:text-gray-400">
              8300 pts
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 text-xs">
            <span className="rounded-full bg-primary/20 px-2.5 py-1 text-primary dark:bg-primary/30 dark:text-white">
              88 retos
            </span>
            <span className="rounded-full bg-slate-200 px-2.5 py-1 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
              Python
            </span>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Ranking;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const ChallengeSubmissions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <button
            onClick={() => navigate('/challenges')}
            className="flex items-center justify-center h-10 w-10 rounded-full text-[#0d121b] dark:text-white"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              arrow_back_ios_new
            </span>
          </button>
        </div>
        <h2 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Mis Retos
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#0d121b] dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              notifications
            </span>
          </button>
        </div>
      </div>

      <div className="pb-3 px-4 bg-background-light dark:bg-background-dark sticky top-[72px] z-10">
        <div className="flex border-b border-[#cfd7e7] dark:border-gray-700 justify-between">
          <button
            onClick={() => navigate('/challenges')}
            className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4c669a] dark:text-gray-400 pb-[13px] pt-4"
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Nuevos</p>
          </button>
          <button
            onClick={() => navigate('/challenges')}
            className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4c669a] dark:text-gray-400 pb-[13px] pt-4"
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Resueltos</p>
          </button>
          <button className="flex flex-1 flex-col items-center justify-center border-b-[3px] border-b-primary text-[#0d121b] dark:text-white pb-[13px] pt-4">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Envíos</p>
          </button>
        </div>
      </div>

      <main className="flex-1 px-4 pb-24">
        <div className="flex flex-col gap-4 py-4">
          <div className="@container">
            <div className="flex flex-col items-stretch justify-start rounded-lg bg-white dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:border dark:border-gray-800">
              <div className="flex w-full min-w-72 grow items-center justify-between gap-4 p-4">
                <div className="flex flex-col gap-1.5">
                  <p className="text-[#0d121b] dark:text-white text-base font-bold leading-tight">Solución en Python</p>
                  <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">
                    32 líneas · Tests: 7/7
                  </p>
                </div>
                <button
                  onClick={() => navigate('/challenges/solution/1')}
                  className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
          </div>
          <div className="@container">
            <div className="flex flex-col items-stretch justify-start rounded-lg bg-white dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:border dark:border-gray-800">
              <div className="flex w-full min-w-72 grow items-center justify-between gap-4 p-4">
                <div className="flex flex-col gap-1.5">
                  <p className="text-[#0d121b] dark:text-white text-base font-bold leading-tight">Solución en Python</p>
                  <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">
                    45 líneas · Tests: 4/7
                  </p>
                </div>
                <button
                   onClick={() => navigate('/challenges/solution/2')}
                   className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
          </div>
          <div className="@container">
            <div className="flex flex-col items-stretch justify-start rounded-lg bg-white dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:border dark:border-gray-800">
              <div className="flex w-full min-w-72 grow items-center justify-between gap-4 p-4">
                <div className="flex flex-col gap-1.5">
                  <p className="text-[#0d121b] dark:text-white text-base font-bold leading-tight">
                    Solución en JavaScript
                  </p>
                  <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">
                    28 líneas · Tests: 5/5
                  </p>
                </div>
                <button
                   onClick={() => navigate('/challenges/solution/3')}
                   className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default ChallengeSubmissions;
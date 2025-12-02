import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const ChallengeDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white dark:bg-background-dark">
      <header className="sticky top-0 z-10 flex h-16 items-center border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-background-dark/80">
        <div className="flex w-full items-center justify-between px-4">
          <button
            onClick={() => navigate('/challenges')}
            className="flex size-10 items-center justify-center rounded-full text-gray-700 dark:text-gray-300"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h2 className="flex-1 text-center text-lg font-bold text-[#111318] dark:text-white">Detalle del Reto</h2>
          <div className="size-10"></div>
        </div>
      </header>

      <main className="flex-1 pb-36">
        <h1 className="text-[#111318] dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 pb-3 pt-6">
          Suma de dos números
        </h1>
        <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Descripción
        </h3>
        <p className="text-[#111318] dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1 px-4">
          Dado un array de enteros `nums` y un entero `target`, retorna los índices de los dos números tal que su suma
          sea igual a `target`. Puedes asumir que cada entrada tendrá exactamente una solución, y no puedes usar el
          mismo elemento dos veces. Puedes retornar la respuesta en cualquier orden.
        </p>

        <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Ejemplos
        </h3>
        <div className="px-4 py-2">
          <div className="rounded bg-background-light dark:bg-background-dark p-4 border border-gray-200 dark:border-gray-800">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
              Input: <code className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-1 py-0.5">
                nums = [2,7,11,15], target = 9
              </code>
            </p>
            <p className="mt-2 font-mono text-sm text-gray-600 dark:text-gray-400">
              Output: <code className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-1 py-0.5">
                [0,1]
              </code>
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Explicación: Porque nums[0] + nums[1] == 9, retornamos [0, 1].
            </p>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="rounded bg-background-light dark:bg-background-dark p-4 border border-gray-200 dark:border-gray-800">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
              Input: <code className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-1 py-0.5">
                nums = [3,2,4], target = 6
              </code>
            </p>
            <p className="mt-2 font-mono text-sm text-gray-600 dark:text-gray-400">
              Output: <code className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-1 py-0.5">
                [1,2]
              </code>
            </p>
          </div>
        </div>

        <h3 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Restricciones
        </h3>
        <ul className="list-disc space-y-2 pl-9 pr-4 text-[#111318] dark:text-gray-300 text-base font-normal leading-normal">
          <li>
            <code className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-1 py-0.5">
              2 &lt;= nums.length &lt;= 10^4
            </code>
          </li>
          <li>
            <code className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-1 py-0.5">
              -10^9 &lt;= nums[i] &lt;= 10^9
            </code>
          </li>
          <li>
            <code className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-1 py-0.5">
              -10^9 &lt;= target &lt;= 10^9
            </code>
          </li>
          <li>Solo existirá una respuesta válida.</li>
        </ul>
      </main>

      <div className="fixed bottom-16 left-0 right-0 z-10 border-t border-gray-200 bg-white/80 p-4 backdrop-blur-sm dark:border-gray-800 dark:bg-background-dark/80 pb-6">
        <button className="h-14 w-full rounded-full bg-primary text-white text-lg font-bold shadow-lg transition-transform active:scale-95">
          Resolver Ahora
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default ChallengeDetail;

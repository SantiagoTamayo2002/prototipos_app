import React from 'react';
import BottomNav from '../components/BottomNav';

const Feed: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-background-light/80 px-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-2xl font-bold text-primary">code_blocks</span>
          <span className="text-xl font-bold text-slate-900">CODIUM</span>
        </div>
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-slate-900 hover:bg-gray-100">
          <span className="material-symbols-outlined text-2xl">add_circle</span>
        </button>
      </header>
      <main className="flex-grow pb-20">
        <div className="flex flex-col gap-4 p-4">
          {/* Post 1 */}
          <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="flex items-center gap-3 p-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://picsum.photos/100/100?random=1"
                alt="Maria Rodriguez"
              />
              <p className="flex-1 text-sm font-semibold text-slate-900">Maria Rodriguez</p>
            </div>
            <div className="px-4">
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900">
                Resolviendo el problema de la mochila
              </h2>
              <p className="mt-2 text-base font-normal leading-normal text-slate-600">
                La programación dinámica fue clave para encontrar la solución óptima. Comparto mi código y el proceso de
                pensamiento que seguí para llegar a él... <a className="font-semibold text-primary" href="#">Ver más</a>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 px-4 pt-3 pb-2">
              <div className="flex items-center justify-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
                <span className="material-symbols-outlined text-lg text-primary filled">favorite</span>
                <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-primary">35</p>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-full bg-slate-500/10 px-3 py-1.5">
                <span className="material-symbols-outlined text-lg text-slate-600">chat_bubble</span>
                <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-slate-600">12</p>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="flex items-center gap-3 p-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://picsum.photos/100/100?random=2"
                alt="Juan Pérez"
              />
              <p className="flex-1 text-sm font-semibold text-slate-900">Juan Pérez</p>
            </div>
            <div className="px-4">
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900">
                Mi experiencia con el reto FizzBuzz
              </h2>
              <p className="mt-2 text-base font-normal leading-normal text-slate-600">
                Fue un reto interesante, al principio intenté resolverlo con un bucle for, pero luego exploré una solución
                recursiva que resultó ser más elegante... <a className="font-semibold text-primary" href="#">Ver más</a>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 px-4 pt-3 pb-2">
              <div className="flex items-center justify-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
                <span className="material-symbols-outlined text-lg text-primary filled">favorite</span>
                <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-primary">12</p>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-full bg-slate-500/10 px-3 py-1.5">
                <span className="material-symbols-outlined text-lg text-slate-600">chat_bubble</span>
                <p className="text-[13px] font-bold leading-normal tracking-[0.015em] text-slate-600">5</p>
              </div>
            </div>
          </div>

          {/* Empty State / CTA */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-4xl">dynamic_feed</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">El muro está vacío</h3>
            <p className="max-w-xs text-sm text-slate-600">
              No hay más publicaciones. ¡Sé el primero en compartir tu experiencia!
            </p>
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-bold leading-normal text-white hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined">add</span>
              <span>Crear Publicación</span>
            </button>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Feed;
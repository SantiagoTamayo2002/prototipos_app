import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleLogin = () => {
    navigate('/feed');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root overflow-x-hidden">
      <div className="flex flex-col items-center justify-center p-4 pt-16">
        <div className="flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-primary text-4xl">terminal</span>
          <span className="text-black text-2xl font-bold">CODIUM</span>
        </div>
      </div>
      <div className="flex-grow flex flex-col p-4">
        <h1 className="text-black tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
          Bienvenido
        </h1>
        <p className="text-text-light text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Inicia sesión para continuar
        </p>
        <div className="flex px-4 py-3 mt-6">
          <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-white border border-border-light p-1">
            <label
              onClick={() => setActiveTab('login')}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-sm font-medium leading-normal transition-all ${
                activeTab === 'login'
                  ? 'bg-primary shadow-[0_1px_4px_rgba(0,0,0,0.1)] text-white'
                  : 'text-text-light'
              }`}
            >
              <span className="truncate">Iniciar Sesión</span>
            </label>
            <label
              onClick={() => setActiveTab('register')}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-sm font-medium leading-normal transition-all ${
                activeTab === 'register'
                  ? 'bg-primary shadow-[0_1px_4px_rgba(0,0,0,0.1)] text-white'
                  : 'text-text-light'
              }`}
            >
              <span className="truncate">Registrarse</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4 py-3">
          <label className="flex flex-col w-full">
            <p className="text-black text-base font-medium leading-normal pb-2">Correo electrónico</p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light bg-white focus:border-primary h-14 placeholder:text-text-light p-[15px] text-base font-normal leading-normal"
              placeholder="tu@email.com"
              type="email"
            />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-black text-base font-medium leading-normal pb-2">Contraseña</p>
            <div className="relative flex w-full items-center">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light bg-white focus:border-primary h-14 placeholder:text-text-light p-[15px] text-base font-normal leading-normal pr-12"
                placeholder="Ingresa tu contraseña"
                type="password"
              />
              <button
                aria-label="Toggle password visibility"
                className="absolute right-0 flex items-center justify-center h-14 w-14 text-text-light hover:text-black"
              >
                <span className="material-symbols-outlined">visibility_off</span>
              </button>
            </div>
          </label>
        </div>
        <div className="w-full px-4 py-2 text-right">
          <a className="text-primary text-sm font-medium hover:underline" href="#">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="px-4 py-4 mt-2">
          <button
            onClick={handleLogin}
            className="flex h-14 w-full items-center justify-center rounded-xl bg-primary px-6 text-base font-medium text-white shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light"
          >
            Iniciar Sesión
          </button>
        </div>
        <div className="flex items-center gap-4 px-4 py-4">
          <hr className="flex-1 border-t border-border-light" />
          <p className="text-sm font-medium text-text-light">o</p>
          <hr className="flex-1 border-t border-border-light" />
        </div>
        <div className="px-4 py-2">
          <button
            onClick={handleLogin}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-border-light bg-white px-6 text-base font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-border-light focus:ring-offset-2 focus:ring-offset-background-light"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.578 12.27c0-.79-.07-1.54-.2-2.27h-9.77v4.28h5.53a4.7 4.7 0 0 1-2.04 3.12v2.78h3.58c2.09-1.92 3.3-4.78 3.3-8.11Z"
                fill="#4285F4"
              ></path>
              <path
                d="M12.608 23c2.7 0 4.96-.89 6.62-2.42l-3.58-2.78c-.9.6-2.07.96-3.44.96-2.65 0-4.89-1.79-5.7-4.22H3.18v2.87A8.997 8.997 0 0 0 12.608 23Z"
                fill="#34A853"
              ></path>
              <path
                d="M6.908 14.33c-.22-.67-.35-1.38-.35-2.12s.13-1.45.35-2.12V7.22H3.18a8.997 8.997 0 0 0 0 9.56l3.73-2.87Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12.608 5.62c1.47 0 2.79.51 3.83 1.48l3.18-3.18C17.558 2.08 15.3 1 12.608 1A8.997 8.997 0 0 0 3.18 7.22l3.73 2.87c.81-2.43 3.05-4.22 5.7-4.22Z"
                fill="#EA4335"
              ></path>
            </svg>
            <span>Continuar con Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
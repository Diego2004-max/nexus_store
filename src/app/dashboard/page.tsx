import React from 'react';

export default async function UserDashboardPage() {
  // SSR: Se ejecuta de forma dinámica en cada petición del servidor para garantizar datos seguros
  const userSession = {
    name: 'Diego Alejandro',
    role: 'Lead Software Engineer',
    activeOrders: 3,
    credits: '$1,250.00 USD'
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-white mb-2">
          Panel de Control de Usuario (SSR)
        </h1>
        <p className="text-slate-400 mb-8">
          Información financiera y de pedidos obtenida de manera segura y dinámica en el servidor en cada solicitud HTTP.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-sm font-medium text-slate-400">Usuario Conectado</h3>
            <p className="text-xl font-bold mt-2 text-indigo-400">{userSession.name}</p>
            <span className="text-xs text-slate-500 mt-1 block">{userSession.role}</span>
          </div>

          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-sm font-medium text-slate-400">Órdenes Activas</h3>
            <p className="text-2xl font-bold mt-2 text-emerald-400">{userSession.activeOrders}</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-sm font-medium text-slate-400">Crédito en Cuenta</h3>
            <p className="text-2xl font-bold mt-2 text-amber-400">{userSession.credits}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
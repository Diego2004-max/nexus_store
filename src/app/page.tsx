import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <span className="text-indigo-400 font-semibold tracking-wide uppercase text-sm">
          Arquitectura Cloud de Alto Rendimiento
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight mt-2 mb-6">
          Nexus Hardware & Tech
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Plataforma global de componentes de ingeniería y licencias de software ejecutando múltiples patrones de renderizado.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/products/rtx-5090-pro"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg"
          >
            Ver Producto (ISR)
          </Link>
          <Link
            href="/dashboard"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-6 py-3 rounded-xl transition-all"
          >
            Panel de Usuario (SSR)
          </Link>
        </div>
      </div>
    </main>
  );
}
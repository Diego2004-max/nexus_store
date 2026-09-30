'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
          <span className="bg-indigo-600 text-xs px-2 py-1 rounded-md text-white">Nexus</span>
          Hardware & Tech
        </Link>
      </div>

      <nav className="flex items-center gap-4 text-sm font-medium">
        <Link 
          href="/" 
          className={`px-3 py-2 rounded-lg transition-colors ${pathname === '/' ? 'bg-slate-800 text-indigo-400' : 'text-slate-400 hover:text-white'}`}
        >
          Inicio (SSG)
        </Link>
        <Link 
          href="/products/rtx-5090-pro" 
          className={`px-3 py-2 rounded-lg transition-colors ${pathname.includes('/products') ? 'bg-slate-800 text-indigo-400' : 'text-slate-400 hover:text-white'}`}
        >
          Producto (ISR)
        </Link>
        <Link 
          href="/dashboard" 
          className={`px-3 py-2 rounded-lg transition-colors ${pathname === '/dashboard' ? 'bg-slate-800 text-indigo-400' : 'text-slate-400 hover:text-white'}`}
        >
          Panel (SSR)
        </Link>
      </nav>
    </header>
  );
}
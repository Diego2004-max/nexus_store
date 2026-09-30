'use client';

import React, { useState } from 'react';

interface CartButtonProps {
  productName: string;
  price: number;
}

export default function CartButton({ productName, price }: CartButtonProps) {
  const [cartCount, setCartCount] = useState<number>(0);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setCartCount((prev) => prev + 1);
      setIsAdding(false);
    }, 300);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md disabled:opacity-50 cursor-pointer"
      >
        {isAdding ? 'Agregando al carrito...' : 'Agregar al Carrito'}
      </button>
      
      <div className="text-slate-300 text-sm">
        Artículos en tu carrito flotante: <strong className="text-white">{cartCount}</strong>
      </div>
    </div>
  );
}
import { ProductService } from '@/core/services/product.service';
import CartButton from '@/components/client/CartButton';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ sku: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { sku } = await params;
  const productService = new ProductService();

  let product;
  try {
    product = await productService.getProductBySku(sku);
  } catch (error) {
    // Mock robusto de respaldo para demostración local si la API externa no está activa
    product = {
      id: '1',
      sku: sku,
      name: 'Tarjeta Gráfica NVIDIA RTX 5090 Pro Workstation',
      price: 1999.99,
      stock: 15,
      category: 'Componentes de Ingeniería',
      getFormattedPrice: () => '$1,999.99 USD',
      isInStock: () => true
    };
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-16 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            {product.category}
          </span>
          <span className="text-slate-400 text-xs font-mono">SKU: {product.sku}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
          {product.name}
        </h1>
        <p className="text-3xl font-extrabold text-emerald-400 mt-4">
          {product.getFormattedPrice()}
        </p>

        <div className="mt-6">
          {product.isInStock() ? (
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full text-sm font-medium">
              ¡En Stock ({product.stock} unidades disponibles para envío inmediato)!
            </span>
          ) : (
            <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1.5 rounded-full text-sm font-medium">
              Producto agotado temporalmente
            </span>
          )}
        </div>

        <div className="mt-8 border-t border-slate-700 pt-6">
          <CartButton productName={product.name} price={product.price} />
        </div>
      </div>
    </main>
  );
}
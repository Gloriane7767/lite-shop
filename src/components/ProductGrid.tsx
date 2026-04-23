import ProductCard, { type ProductItem } from "./ProductCard.tsx";

type ProductGridProps = {
    category: string;
    maxPrice: number;
    availability: string;
    searchQuery: string;
    onAddToCart: () => void;
    onRemoveFromCart: () => void;
};

const products: ProductItem[] = [
    { id: 1, name: "Technical Shell Jacket", category: "Outerwear", price: 890, discountPrice: 1450, rating: 4.9, stockStatus: "In Stock • Ships in 2 days", imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Trail Running Shoes", category: "Footwear", price: 620, discountPrice: 980, rating: 4.7, stockStatus: "In Stock • Ships in 3 days", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Merino Wool Scarf", category: "Accessories", price: 180, discountPrice: 290, rating: 4.8, stockStatus: "Low Stock • Ships in 1 day", imageUrl: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Insulated Parka", category: "Outerwear", price: 1100, discountPrice: 1750, rating: 4.6, stockStatus: "In Stock • Ships in 2 days", imageUrl: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=800" },
    { id: 5, name: "Leather Crossbody Bag", category: "Accessories", price: 340, discountPrice: 520, rating: 4.9, stockStatus: "In Stock • Ships in 2 days", imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800" },
    { id: 6, name: "Waterproof Hiking Boots", category: "Footwear", price: 780, discountPrice: 1200, rating: 4.8, stockStatus: "In Stock • Ships in 4 days", imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800" },
];

const ProductGrid = ({ category, maxPrice, availability, searchQuery, onAddToCart, onRemoveFromCart }: ProductGridProps) => {
    const filtered = products
        .filter(p => category === "all" || p.category === category)
        .filter(p => p.price <= maxPrice)
        .filter(p => availability === "in-stock" ? p.stockStatus.toLowerCase().includes("in stock") :
                     availability === "on-sale" ? p.discountPrice !== undefined : true)
        .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        return (
            <section className="lg:col-span-9">
                <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h1 className="text-xl font-bold tracking-tight text-slate-900">Recommended for you</h1>
                        <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                            <span className="hidden sm:inline">Sort by:</span>
                            <div className="relative">
                                <select className="appearance-none border border-slate-200 bg-white rounded-[0.75rem] py-2 pl-3 pr-9 text-sm text-slate-950 transition-all duration-200 outline-none cursor-pointer focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10">
                                    <option selected>Newest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Best Selling</option>
                                </select>
                            </div>
                        </label>
                    </div>

                    <div className="mt-5 h-px bg-slate-100"></div>

                    <div id="product-grid" className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} product={product} onRegisterClick={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
                        ))}
                    </div>

                    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50" aria-label="Previous page" title="Previous">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        </button>
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 text-white font-medium transition-all duration-200" aria-current="page">1</button>
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">2</button>
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">3</button>
                        <span className="px-2 text-sm text-slate-400">…</span>
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">12</button>
                        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50" aria-label="Next page" title="Next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </button>
                    </nav>
                </div>
            </section>
        );
};

export default ProductGrid;

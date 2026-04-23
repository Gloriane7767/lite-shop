import * as React from "react";
import Header, { defaultHeaderProps } from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid.tsx";
import NewsLetter from "./components/NewsLetter.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    const [cartCount, setCartCount] = React.useState(0);
    const [searchQuery, setSearchQuery] = React.useState("");

    const updateCount = (newCount: number) => {
        if (newCount >= 0) setCartCount(newCount);
    };

    return (
        <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">
            <Header
                title="LITE.SHOP"
                nav={defaultHeaderProps.nav}
                cartItemCount={cartCount}
                onSearch={(query) => setSearchQuery(query)}
            />

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <Sidebar
                        category="all"
                        maxPrice={1800}
                        availability=""
                    />
                    <ProductGrid
                        category="all"
                        maxPrice={1800}
                        availability=""
                        searchQuery={searchQuery}
                        onAddToCart={() => updateCount(cartCount + 1)}
                        onRemoveFromCart={() => updateCount(cartCount - 1)}
                    />
                </div>
            </main>

            <section className="mt-12 bg-slate-900 py-16 text-white overflow-hidden relative">
                <NewsLetter />
            </section>

            <Footer />
        </div>
    );
};

export default App;

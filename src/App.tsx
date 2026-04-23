import * as React from "react";
import Header, { defaultHeaderProps } from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid.tsx";
import NewsLetter from "./components/NewsLetter.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    const [cartCount, setCartCount] = React.useState(0);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [categories, setCategories] = React.useState<string[]>(["all"]);
    const [maxPrice, setMaxPrice] = React.useState(1800);
    const [availabilities, setAvailabilities] = React.useState<string[]>([]);

    const updateCount = (newCount: number) => {
        if (newCount >= 0) setCartCount(newCount);
    };

    const toggleCategory = (value: string) => {
        setCategories(prev =>
            prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
        );
    };

    const toggleAvailability = (value: string) => {
        setAvailabilities(prev =>
            prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]
        );
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
                        categories={categories}
                        maxPrice={maxPrice}
                        availabilities={availabilities}
                        onCategoryChange={toggleCategory}
                        onMaxPriceChange={setMaxPrice}
                        onAvailabilityChange={toggleAvailability}
                    />
                    <ProductGrid
                        categories={categories}
                        maxPrice={maxPrice}
                        availabilities={availabilities}
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

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid.tsx";
import NewsLetter from "./components/NewsLetter.tsx";
import Footer from "./components/Footer.tsx";


const App = () => {
    return (
        <div>
          <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">
              <Header cartCount={3} />

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <Sidebar
                        category="all"
                        maxPrice={1800}
                        availability=""
                    />
                    <ProductGrid category="all" maxPrice={1800} availability="" />
              </div>
            </main>

            <section className="mt-12 bg-slate-900 py-16 text-white overflow-hidden relative">
                <NewsLetter />
            </section>
                <Footer />
          </div>
        </div>
);
};

export default App;

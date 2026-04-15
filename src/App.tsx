import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid.tsx";
import NewsLetter from "./components/NewsLetter.tsx";
import Footer from "./components/Footer.tsx";


const App = () => {
    return (
        <div>
          <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">

            <Header />

          {/* =========================================================
            Page Layout
          ========================================================== */}
          <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* =======================================================
                Sidebar Filters
              ======================================================== */}
              <Sidebar />
              {/* =======================================================
                Main Content
              ======================================================== */}
              <section className="lg:col-span-9">
                <div
                    className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400 p-5">
                  {/* Title + Sort */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-xl font-bold tracking-tight text-slate-900">Recommended for you</h1>

                    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                      <span className="hidden sm:inline">Sort by:</span>
                      <div className="relative">
                        <select
                            className="appearance-none border border-slate-200 bg-white rounded-[0.75rem] py-2 pl-3 pr-9 text-sm text-slate-950 transition-all duration-200 outline-none cursor-pointer focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10">
                          <option selected>Newest</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Best Selling</option>
                        </select>
                        <span
                            className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path
                        d="m6 9 6 6 6-6"/></svg>
                  </span>
                      </div>
                    </label>
                  </div>

                  <div className="mt-5 h-px bg-slate-100"></div>

                  {/* Product Grid */}
                 <ProductGrid />
                  {/* Pagination */}
                  <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                            aria-label="Previous page" title="Previous">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6"/>
                      </svg>
                    </button>

                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 text-white font-medium transition-all duration-200"
                            aria-current="page">1
                    </button>
                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                      2
                    </button>
                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                      3
                    </button>
                    <span className="px-2 text-sm text-slate-400">…</span>
                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                      12
                    </button>

                    <button type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                            aria-label="Next page" title="Next">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </button>
                  </nav>
                </div>
              </section>
            </div>
          </main>

          {/* =========================================================
            Newsletter & Footer
          ========================================================== */}
          <section className="mt-12 bg-slate-900 py-16 text-white overflow-hidden relative">
            {/* Decorative element */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"></div>

           <NewsLetter />

                <form className="w-full max-w-md">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input type="email" placeholder="Enter your email"
                           className="flex-1 rounded-[1rem] bg-white/5 border border-white/10 px-5 py-4 text-sm font-medium text-white placeholder:text-slate-500 outline-none transition-all focus:bg-white/10 focus:ring-2 focus:ring-blue-500/50"
                           required/>
                    <button type="submit"
                            className="rounded-[1rem] bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95">
                      Subscribe
                    </button>
                  </div>
                  <p className="mt-3 text-[10px] text-slate-500 italic">By subscribing, you agree to our Privacy Policy
                    and
                    Terms of Service.</p>
                </form>
          </section>

          <Footer />
        </div>
        </div>
);
};

export default App;

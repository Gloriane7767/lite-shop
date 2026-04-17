type NavItem ={
    lable: string;
    href: string;
}

const navItems: NavItem[] = [
    { lable: "New Arrival", href: "#" },
    { lable: "Men", href: "#" },
    { lable: "Women", href: "#" },
    { lable: "Sale", href: "#" },
];

const Header = () => {
    return (
<>
            <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
            <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path
                  d="m7.5 4.27 9 5.15"/><path
                  d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path
                  d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </span>
                            <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                        </a>

                        {/* Nav links */}
                        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-100">
                            {navItems.map((item) => (
                                <a
                                    key={item.lable}
                                    href={item.href}
                                    className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                                >
                                    {item.lable}
                                </a>
                            ))}
                        </nav>

                        {/* Right icons */}
                        <div className="flex items-center gap-2">
                            {/* Status Indicator */}
                            <div
                                className="mr-4 hidden items-center gap-2 rounded-full bg-blue-500/30 px-3 py-1 lg:flex border border-blue-400/20">
                    <span className="relative flex h-2 w-2">
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100"></span>
                    </span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">Live</span>
                            </div>

                            {/* Search */}
                            <div className="relative hidden sm:block">
                                <input id="search-input" type="text" placeholder="Search products..."
                                       className="h-10 w-48 rounded-[0.75rem] bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 border border-blue-400/20 focus:bg-blue-500/50 focus:w-64 transition-all duration-300 outline-none"/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                     className="absolute left-3.5 top-3 text-blue-200">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="m21 21-4.3-4.3"/>
                                </svg>
                            </div>

                            {/* Cart */}
                            <button type="button"
                                    className="relative inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                                    aria-label="Cart" title="Cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                                    <path d="M3 6h18"/>
                                    <path d="M16 10a4 4 0 0 1-8 0"/>
                                </svg>
                                {/* Cart Count Badge */}
                                <span id="cart-count"
                                      className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm hidden">0</span>
                            </button>

                            {/* User */}
                            <button type="button"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                                    aria-label="Account" title="Account">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </button>

                            {/* Mobile Menu Button */}
                            <button type="button"
                                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[0.75rem] bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                                    aria-label="Menu" title="Menu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="4" x2="20" y1="12" y2="12"/>
                                    <line x1="4" x2="20" y1="6" y2="6"/>
                                    <line x1="4" x2="20" y1="18" y2="18"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
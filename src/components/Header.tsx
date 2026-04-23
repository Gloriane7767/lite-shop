import { ShoppingBag } from 'lucide-react';

export type HeaderProps = {
    title: string;
    nav: { label: string; href: string }[];
    cartItemCount: number;
    onSearch: (query: string) => void;
};

export const defaultHeaderProps: HeaderProps = {
    title: "LITE.SHOP",
    nav: [
        { label: "New Arrival", href: "#" },
        { label: "Men", href: "#" },
        { label: "Women", href: "#" },
        { label: "Sale", href: "#" },
    ],
    cartItemCount: 0,
    onSearch: (query: string) => console.log("Search query:", query.replace(/[\r\n]/g, "")),
};

const Header = ({ title, nav, cartItemCount, onSearch }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
                            <ShoppingBag size={20} />
                        </span>
                        <span className="text-xl tracking-tighter uppercase font-black">{title}</span>
                    </a>

                    {/* Nav links */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-100">
                        {nav.map(({ label, href }) => (
                            <a key={label} href={href}>{label}</a>
                        ))}
                    </nav>

                    {/* Right icons */}
                    <div className="flex items-center gap-2">
                        {/* Status Indicator */}
                        <div className="mr-4 hidden items-center gap-2 rounded-full bg-blue-500/30 px-3 py-1 lg:flex border border-blue-400/20">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">Live</span>
                        </div>

                        {/* Search */}
                        <div className="relative hidden sm:block">
                            <input
                                id="search-input"
                                type="text"
                                placeholder="Search products..."
                                onChange={(e) => onSearch(e.target.value)}
                                className="h-10 w-48 rounded-[0.75rem] bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 border border-blue-400/20 focus:bg-blue-500/50 focus:w-64 transition-all duration-300 outline-none"
                            />
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
                            <ShoppingBag size={20} />
                            <span
                                className={`absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ${cartItemCount > 0 ? "" : "hidden"}`}>
                                {cartItemCount}
                            </span>
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
    );
};

export default Header;

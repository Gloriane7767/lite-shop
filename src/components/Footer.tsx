type FooterLink = {
    label: string;
    href: string };

type FooterColumn = {
    heading: string;
    links: FooterLink[] };

type FooterBrand = {
    name: string;
    tagline: string;
    copyright: string;
};

type FooterLegal = {
    label: string;
    href: string };

const footerBrand: FooterBrand = {
    name: "LITE.SHOP",
    tagline: "Modern e-commerce experience built for speed and elegance. Discover the latest trends in outerwear, footwear and accessories.",
    copyright: "© 2026 LITE.SHOP. All rights reserved.",
};

const footerColumns: FooterColumn[] = [
    {
        heading: "Shop",
        links: [
            { label: "New Arrival", href: "#" },
            { label: "Best Sellers", href: "#" },
            { label: "Men Collection", href: "#" },
            { label: "Women Collection", href: "#" },
        ],
    },
    {
        heading: "Support",
        links: [
            { label: "Order Status", href: "#" },
            { label: "Shipping Policy", href: "#" },
            { label: "Returns & Exchanges", href: "#" },
            { label: "FAQs", href: "#" },
        ],
    },
    {
        heading: "Company",
        links: [
            { label: "About Us", href: "#" },
            { label: "Sustainability", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
];

const footerLegal: FooterLegal[] = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
];

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
                    <span
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path
                            d="m7.5 4.27 9 5.15"/><path
                            d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path
                            d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                    </span>
                            <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                        </a>
                        <p className="max-w-xs text-sm text-slate-500 leading-relaxed font-medium">
                            {footerBrand.tagline}
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#"
                               className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                               aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                                </svg>
                            </a>
                            <a href="#"
                               className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                               aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {footerColumns.map((col) => (
                        <div key={col.heading} className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">{col.heading}</h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-500">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="transition-colors hover:text-blue-600">{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-20 border-t border-slate-100 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        {footerBrand.copyright}
                    </p>
                    <div className="flex items-center gap-6">
                        {footerLegal.map((item) => (
                            <a key={item.label} href={item.href}
                               className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
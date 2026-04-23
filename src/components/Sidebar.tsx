type CategoryItem = { label: string; value: string; count: number };
type AvailabilityItem = { label: string; value: string };
type PromoCard = { title: string; description: string; cta: string };
type PriceRange = { min: number; max: number; currency: string };

type SidebarProps = {
    categories: string[];
    maxPrice: number;
    availabilities: string[];
    sidebarItems?: CategoryItem[];
    availabilityItems?: AvailabilityItem[];
    promoCard?: PromoCard;
    priceRange?: PriceRange;
    onCategoryChange: (value: string) => void;
    onMaxPriceChange: (value: number) => void;
    onAvailabilityChange: (value: string) => void;
};

const defaultSidebarItems: CategoryItem[] = [
    { label: "All", value: "all", count: 120 },
    { label: "Outerwear", value: "outerwear", count: 45 },
    { label: "Footwear", value: "footwear", count: 30 },
    { label: "Accessories", value: "accessories", count: 25 },
];

const defaultAvailabilityItems: AvailabilityItem[] = [
    { label: "In Stock", value: "in-stock" },
    { label: "On Sale", value: "on-sale" },
];

const defaultPromoCard: PromoCard = {
    title: "Summer Sale",
    description: "Get up to 50% off on all summer collections. Limited time offer!",
    cta: "Shop Now",
};

const defaultPriceRange: PriceRange = { min: 0, max: 1800, currency: "USD" };

const Sidebar = ({
    categories,
    maxPrice,
    availabilities,
    sidebarItems = defaultSidebarItems,
    availabilityItems = defaultAvailabilityItems,
    promoCard = defaultPromoCard,
    priceRange = defaultPriceRange,
    onCategoryChange,
    onMaxPriceChange,
    onAvailabilityChange,
}: SidebarProps) => {
    return (
        <aside className="col-span-full lg:col-span-3 lg:sticky lg:top-20 self-start">
            <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400 p-5">
                {/* Categories */}
                <section aria-labelledby="filters-categories" className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 id="filters-categories" className="text-sm font-bold text-slate-900">Categories</h2>
                        <button type="button" className="lg:hidden text-slate-400 hover:text-blue-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"/>
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-3">
                        {sidebarItems.map((item) => (
                            <label key={item.value} className="flex items-center gap-3 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    value={item.value}
                                    className="category-filter h-[1.125rem] w-[1.125rem] rounded-[0.375rem] border border-slate-200 accent-blue-600 cursor-pointer"
                                    checked={categories.includes(item.value)}
                                    onChange={() => onCategoryChange(item.value)}
                                />
                                <span className="flex-1 text-sm text-slate-700 font-medium">
                                    {item.label}{" "}
                                    <span className="text-slate-400 font-normal">({item.count})</span>
                                </span>
                            </label>
                        ))}
                    </div>
                </section>

                <div className="my-5 h-px bg-slate-100"></div>

                {/* Price Range */}
                <section aria-labelledby="filters-price" className="space-y-3">
                    <h2 id="filters-price" className="text-sm font-bold text-slate-900">Price Range</h2>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{priceRange.min} {priceRange.currency}</span>
                        <span className="text-sm font-medium text-blue-600">{maxPrice} {priceRange.currency}</span>
                        <span>{priceRange.max} {priceRange.currency}</span>
                    </div>

                    <input
                        type="range"
                        min={priceRange.min}
                        max={priceRange.max}
                        value={maxPrice}
                        className="w-full accent-blue-500"
                        aria-label="Price range"
                        onChange={(e) => onMaxPriceChange(Number(e.target.value))}
                    />
                </section>

                <div className="my-5 h-px bg-slate-100"></div>

                {/* Availability */}
                <section aria-labelledby="filters-availability" className="space-y-4">
                    <h2 id="filters-availability" className="text-sm font-bold text-slate-900">Availability</h2>

                    <div className="space-y-3">
                        {availabilityItems.map((item) => (
                            <label key={item.value} className="flex items-center gap-3 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    value={item.value}
                                    className="h-[1.125rem] w-[1.125rem] rounded-[0.375rem] border border-slate-200 accent-blue-600 cursor-pointer"
                                    checked={availabilities.includes(item.value)}
                                    onChange={() => onAvailabilityChange(item.value)}
                                />
                                <span className="flex-1 text-sm text-slate-700">{item.label}</span>
                            </label>
                        ))}
                    </div>
                </section>

                {/* Promo Card */}
                <section className="mt-6">
                    <div className="rounded-[1.25rem] bg-gradient-to-br from-blue-600 to-amber-500 text-white overflow-hidden relative before:content-[''] before:absolute before:-top-[20%] before:-right-[10%] before:w-[200px] before:h-[200px] before:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] before:rounded-full p-6">
                        <h3 className="text-lg font-bold text-white">{promoCard.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed opacity-90 text-white">
                            {promoCard.description}
                        </p>
                        <button type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-[0.75rem] px-5 py-2.5 font-semibold bg-white text-blue-600 transition-all duration-200 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-px mt-6 w-full shadow-lg border-none">
                            {promoCard.cta}
                        </button>
                    </div>
                </section>
            </div>
        </aside>
    );
};

export default Sidebar;

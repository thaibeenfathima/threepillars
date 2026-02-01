'use client';

const testimonials = [
    {
        quote: "Three Pillar Solution completely transformed our online presence. Our leads doubled in just three months!",
        author: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
    },
    {
        quote: "The team's creativity and strategic approach are unmatched. They truly understand what drives growth.",
        author: "Michael Chen",
        role: "Marketing Director, GreenLife",
    },
    {
        quote: "Professional, transparent, and results-driven. Highly recommend them for any business looking to scale.",
        author: "Emily Davis",
        role: "Founder, boutique.co",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">What Our Clients Say</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-2xl relative">
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8 text-gray-200">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.062 14.929 15.498C15.536 14.934 16.638 14.652 18.235 14.652H19.22V8.652H15.017C14.793 8.652 14.502 8.618 14.145 8.55C13.788 8.482 13.529 8.28 13.369 7.944L14.017 4.652H21.22V14.652V21H14.017ZM5.01697 21L5.01697 18C5.01697 16.896 5.32097 16.062 5.92897 15.498C6.53697 14.934 7.63897 14.652 9.23497 14.652H10.22V8.652H6.01697C5.79297 8.652 5.50197 8.618 5.14497 8.55C4.78797 8.482 4.52897 8.28 4.36897 7.944L5.01697 4.652H12.22V14.652V21H5.01697Z" />
                                </svg>
                            </div>

                            <p className="text-gray-700 text-lg mb-6 leading-relaxed relative z-10">"{t.quote}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{t.author}</div>
                                    <div className="text-sm text-gray-500">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

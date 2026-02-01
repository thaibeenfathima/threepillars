'use client';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Target } from 'lucide-react';

const pillars = [
    {
        icon: Target,
        title: 'Strategy',
        description: 'We build data-backed roadmaps tailored to your specific business goals, ensuring every move counts.',
        color: 'bg-blue-50 text-blue-600',
        border: 'border-blue-100',
    },
    {
        icon: Lightbulb,
        title: 'Creativity',
        description: 'Our design and content teams craft compelling visuals and narratives that capture attention and convert.',
        color: 'bg-violet-50 text-violet-600',
        border: 'border-violet-100',
    },
    {
        icon: TrendingUp,
        title: 'Growth',
        description: 'Focusing on tangible results: leads, sales, and ROI. We optimize continuously for maximum scale.',
        color: 'bg-indigo-50 text-indigo-600',
        border: 'border-indigo-100',
    },
];

export function Pillars() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our Core Pillars</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        The foundation of everything we do. We combine deep strategic insight with creative excellence to drive sustainable growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`p-10 rounded-3xl bg-white border ${pillar.border} shadow-sm hover:shadow-xl transition-all duration-300 group`}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${pillar.color}`}>
                                <pillar.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{pillar.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

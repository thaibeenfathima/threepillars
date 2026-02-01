'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Share2, Search, BarChart, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Share2,
        title: 'Social Media Management',
        description: 'Engage your audience and build brand loyalty across all major platforms.',
    },
    {
        icon: Search,
        title: 'SEO & Optimization',
        description: 'Rank higher on search engines and drive organic traffic to your website.',
    },
    {
        icon: BarChart,
        title: 'Meta Ads & Paid Social',
        description: 'High-converting ad campaigns on Facebook and Instagram to generate leads.',
    },
    {
        icon: Video,
        title: 'Content & Video Editing',
        description: 'Professional video production and content creation that tells your story.',
    },
];

export function ServicesPreview() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Comprehensive Digital Services</h2>
                        <p className="text-gray-600 text-lg">
                            We offer a full suite of digital marketing solutions designed to help your business grow online.
                        </p>
                    </div>
                    <Link href="/services">
                        <Button variant="outline" className="group">
                            View All Services
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <Link href="/services" className="text-primary font-medium text-sm inline-flex items-center hover:underline">
                                Learn more <ArrowRight className="ml-1 w-3 h-3" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Share2, Search, BarChart, Video } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | Three Pillar Solution',
    description: 'Social Media Management, SEO, Meta Ads, and Content Creation services tailored for your growth.',
};

const services = [
    {
        id: "social-media",
        title: "Social Media Management",
        icon: Share2,
        description: "We handle your entire social presence, from content planning to community management.",
        howItHelps: "Builds a loyal community and keeps your brand top-of-mind.",
        outcomes: ["Increased Engagement", "Brand Loyalty", "Consistent Presence"],
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        id: "seo",
        title: "Search Engine Optimization (SEO)",
        icon: Search,
        description: "Data-driven strategies to improve your rankings and drive organic traffic.",
        howItHelps: "Ensures your customers find you when they are searching for your solutions.",
        outcomes: ["Higher Rankings", "Organic Traffic Growth", "Long-term Lead Gen"],
        color: "text-green-600",
        bg: "bg-green-50",
    },
    {
        id: "meta-ads",
        title: "Meta Ads (Facebook & Instagram)",
        icon: BarChart,
        description: "Targeted ad campaigns designed to generate leads and sales instantly.",
        howItHelps: "Reaches your ideal customer with precision targeting and compelling offers.",
        outcomes: ["Immediate Leads", "High ROI", "Scalable Growth"],
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        id: "content",
        title: "Content Creation & Video Editing",
        icon: Video,
        description: "High-quality visuals and videos that tell your brand's story effectively.",
        howItHelps: "Captures attention in a crowded feed and communicates value quickly.",
        outcomes: ["Viral Potential", "Higher Retention", "Professional Image"],
        color: "text-orange-600",
        bg: "bg-orange-50",
    },
];

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Our Services"
                description="Comprehensive digital marketing solutions designed to scale your business."
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                                    } gap-12 items-center`}
                            >
                                <div className="flex-1 space-y-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} ${service.color} mb-6`}>
                                        <service.icon size={32} />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h2>
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-2">How it helps:</h4>
                                        <p className="text-gray-600">{service.howItHelps}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-4">Expected Outcomes:</h4>
                                        <ul className="space-y-3">
                                            {service.outcomes.map((outcome) => (
                                                <li key={outcome} className="flex items-center gap-3 text-gray-600">
                                                    <CheckCircle2 size={20} className="text-green-500" />
                                                    {outcome}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-4">
                                        <Link href="/contact">
                                            <Button variant="outline">Get Started with {service.title.split(' ')[0]}</Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex-1 w-full">
                                    <div className={`aspect-video rounded-3xl ${service.bg} flex items-center justify-center shadow-lg`}>
                                        <div className="text-center p-8 opacity-70">
                                            <service.icon size={80} className={`mx-auto mb-4 ${service.color}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
                    <p className="mb-8 text-xl opacity-90">Book a free consultation and we'll analyze your business.</p>
                    <Link href="/contact">
                        <Button variant="white" size="lg" className="rounded-full px-10">Book Consultation</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}

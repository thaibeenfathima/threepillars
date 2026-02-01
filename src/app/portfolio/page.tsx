import { PageHeader } from "@/components/page-header";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Results | Three Pillar Solution',
    description: 'See how we have helped businesses grow with our digital marketing strategies. Case studies and success stories.',
};

const clients = [
    {
        name: "TechStart Inc.",
        category: "B2B SaaS",
        result: "250% Growth in Leads",
        stats: [
            { label: "Monthly Leads", value: "+250%" },
            { label: "Cost Per Lead", value: "-40%" },
            { label: "Conversion Rate", value: "3.5%" },
        ],
        description: "We implemented a comprehensive SEO and LinkedIn Ads strategy to target enterprise clients, resulting in a massive influx of qualified leads.",
        bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
        name: "Urban Style",
        category: "E-Commerce",
        result: "10k New Followers & 3x Sales",
        stats: [
            { label: "Instagram Followers", value: "+10k" },
            { label: "ROAS", value: "8.5x" },
            { label: "Revenue", value: "+300%" },
        ],
        description: "A visually stunning content strategy combined with high-intent Meta Ads helped this fashion brand dominate their niche.",
        bg: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
    {
        name: "Local Beans Coffee",
        category: "Local Business",
        result: "Doubled Foot Traffic",
        stats: [
            { label: "Local Search Visits", value: "+180%" },
            { label: "Social Engagement", value: "+500%" },
            { label: "Store Visits", value: "2x" },
        ],
        description: "We optimized their Google Business Profile and ran hyper-local awareness campaigns to bring the community to their door.",
        bg: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
];

export default function PortfolioPage() {
    return (
        <>
            <PageHeader
                title="Our Results"
                description="We let the numbers speak for themselves. Here is how we've helped businesses grow."
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {clients.map((client, index) => (
                            <div key={index} className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className={`h-64 ${client.bg} p-8 flex flex-col justify-end text-white relative`}>
                                    <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/10">
                                        {client.category}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2">{client.name}</h3>
                                    <p className="text-white/90 font-medium text-lg">{client.result}</p>
                                </div>

                                <div className="p-8 bg-white flex-1 flex flex-col">
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {client.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 mb-8 mt-auto">
                                        {client.stats.map((stat, i) => (
                                            <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                                                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:underline">
                                        Read Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {/* CTA Card */}
                        <div className="rounded-3xl bg-gray-900 p-8 flex flex-col justify-center items-center text-center text-white min-h-[400px]">
                            <h3 className="text-3xl font-bold mb-4">You Could Be Next</h3>
                            <p className="text-gray-400 mb-8 max-w-sm">
                                Join the list of successful businesses growing with Three Pillar Solution.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="white" className="rounded-full px-8">Start Your Success Story</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

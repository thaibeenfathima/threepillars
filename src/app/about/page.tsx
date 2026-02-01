import { PageHeader } from "@/components/page-header";
import { CheckCircle2, TrendingUp, Users, Eye } from "lucide-react";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Three Pillar Solution',
    description: 'Learn about our team, mission, and vision. We are dedicated to strategy, creativity, and growth.',
};

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="Who We Are"
                description="We are a team of 4 dedicated digital marketing professionals passionate about helping businesses grow online."
            />

            {/* Mission & Vision */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                                        <TrendingUp size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To empower small and medium businesses with enterprise-level digital strategies that deliver measurable growth and sustainable success.
                                </p>
                            </div>

                            <div className="bg-violet-50 p-8 rounded-2xl border border-violet-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-violet-100 p-3 rounded-lg text-violet-600">
                                        <Eye size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To be the most trusted partner for businesses looking to dominate the digital landscape through creativity, transparency, and results.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gray-100 shadow-xl">
                            <Image
                                src="/team-v2.png"
                                alt="Three Pillar Solution Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Why Three Pillar Solution?</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We define ourselves by our commitment to transparency and results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Transparency", desc: "No hidden fees or vague metrics. We provide clear, detailed reports on everything we do." },
                            { title: "Results-Driven", desc: "We focus on what matters: ROI, leads, and sales, not just vanity metrics." },
                            { title: "Long-Term Partners", desc: "We view ourselves as an extension of your team, committed to your long-term success." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Meet The Team</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            The experts behind your growth.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Harish", role: "Strategy Lead", image: null },
                            { name: "Thaibeen fathima", role: "Creative Director", image: "/thaibeen-final.jpg" },
                            { name: "Hariharan", role: "SEO Specialist", image: "/lokesh-final.jpg" },
                            { name: "Lokesh", role: "Ads Manager", image: "/hariharan-final.jpg" }
                        ].map((member, i) => (
                            <div key={i} className="group text-center">
                                <div className="aspect-square bg-gray-100 rounded-full mb-6 overflow-hidden relative mx-auto w-48 border-4 border-white shadow-lg">
                                    {member.image ? (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-primary/40 font-bold text-4xl">
                                            {member.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-primary font-medium mb-2">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

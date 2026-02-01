'use client';

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactContent() {
    const [formState, setFormState] = useState({ state: 'idle' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState({ state: 'submitting' });

        const form = e.target as HTMLFormElement;

        // Get values
        const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
        const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
        const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value;
        const service = (form.elements.namedItem('service') as HTMLSelectElement)?.value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;

        const subject = `New Inquiry from ${name}: ${service}`;
        const body = `Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}`;

        // Small delay to show "Sending" state for UX, then open mailto
        setTimeout(() => {
            window.location.href = `mailto:threepillarsolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setFormState({ state: 'success' });
        }, 800);
    };

    return (
        <>
            <PageHeader
                title="Contact Us"
                description="Ready to take your business to the next level? Get in touch with us today."
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-gray-900">Let's Grow Your Business</h2>
                            <p className="text-gray-600 mb-12 text-lg">
                                Whether you have a specific goal in mind or just want to explore your options, we're here to help.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                                        <p className="text-gray-600">threepillarsolutions@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                        <p className="text-gray-600">+91 63808 37262</p>
                                        <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                                        <p className="text-gray-600">
                                            Chennai, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="font-bold text-gray-900 mb-4">Connect on WhatsApp</h3>
                                <Button
                                    className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none w-full sm:w-auto gap-2"
                                    onClick={() => window.open('https://wa.me/916380837262', '_blank')}
                                >
                                    <MessageSquare size={20} />
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100">
                            {formState.state === 'success' ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                                    <Button
                                        variant="outline"
                                        className="mt-8"
                                        onClick={() => setFormState({ state: 'idle' })}
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-900">Full Name</label>
                                            <input
                                                required
                                                name="name"
                                                id="name"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-900">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-900">Phone Number (Optional)</label>
                                        <input
                                            name="phone"
                                            id="phone"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-medium text-gray-900">Service or Subject</label>
                                        <select
                                            name="service"
                                            id="service"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Social Media Management</option>
                                            <option>SEO Services</option>
                                            <option>Paid Advertising</option>
                                            <option>Content Creation</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-900">Message</label>
                                        <textarea
                                            required
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                            placeholder="Tell us about your project or goals..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 text-lg"
                                        disabled={formState.state === 'submitting'}
                                    >
                                        {formState.state === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

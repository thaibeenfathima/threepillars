'use client';

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactContent() {
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
                            <form
                                action="https://formsubmit.co/threepillarsolutions@gmail.com"
                                method="POST"
                                className="space-y-6"
                            >
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_subject" value="New Inquiry from Three Pillar Site" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                {/* Optional: Add _next to redirect back to your site, e.g., <input type="hidden" name="_next" value="https://your-domain.com/thanks" /> */}

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
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

import Link from 'next/link';
import { Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-950 text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                Three Pillar Solution
                            </span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Empowering businesses with Strategy, Creativity, and Growth. We help you dominate the digital landscape through data-driven digital marketing.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-primary transition-colors">Our Results</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>Chennai, India</li>
                            <li><a href="mailto:threepillarsolutions@gmail.com" className="hover:text-primary transition-colors">threepillarsolutions@gmail.com</a></li>
                            <li><a href="tel:+916380837262" className="hover:text-primary transition-colors">+91 63808 37262</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
                    <p>© {new Date().getFullYear()} Three Pillar Solution. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

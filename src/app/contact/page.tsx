import { ContactContent } from "@/components/contact-content";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Three Pillar Solution',
    description: 'Get in touch with us for a free consultation. Let us help you grow your business.',
};

export default function ContactPage() {
    return <ContactContent />;
}

import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { ServicesPreview } from "@/components/services-preview";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <ServicesPreview />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Let's build a strategy that works for you. Get in touch with us today.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="white" className="h-14 px-10 text-lg rounded-full">
              Let's Grow Together
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

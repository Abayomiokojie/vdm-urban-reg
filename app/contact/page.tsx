import { ArrowRight } from "lucide-react";
import Image from "next/image";
// import MaleEngineer from "@/public/hero/MaleEngineer.png";

// import Image from "next/image";
// import components from "@/components";

export default function Contact() {
  return (
    <main>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Section */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Construction Compliance Solutions
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                We help builders, developers, and property owners in Lagos stay
                compliant with building regulations — from permits to safety and
                site reporting.
              </p>

              <button
                //   onClick={handleLearnMore}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                aria-label="Learn more about our construction compliance solutions"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full border-4 border-amber-600 overflow-hidden shadow-2xl">
                  {/* <Image
                    src={MaleEngineer}
                    alt="Professional construction engineer reviewing building compliance documents"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 384px"
                    priority
                  /> */}
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-amber-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

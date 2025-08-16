// "use client";

// import { useState } from "react";
// import { ChevronRight } from "lucide-react";
import Image from "next/image";
import HeroImage from "@/public/hero/hero-group2.png";

const Hero = () => {
  return (
    <>
      <section className=" pb-36 pt-16 bg-blue-50 -z-50" id="home">
        <div className="container mx-auto relative max-w-[1240px]">
          <div className=" grid md:flex mx-auto gap-16 items-center">
            <div className="max-w-[500px]">
              <h1 className="flex text-2xl md:text-5xl font-bold mb-4 leading-tight text-[#040455]">
                Construction Compliance Solutions
              </h1>

              <p className="text-lg md:text-xl mb-8 text-[#1f1f25]">
                We help builders, developers, and property owners in Lagos stay
                compliant with building regulations, from permits to safety and
                site reporting.
              </p>
              <button className=" outline-2 font-semibold py-3 px-8 rounded-lg transition-all duration-300 bg-blue-900 text-white cursor-pointer hover:scale-110">
                Request Free Compliance Review
              </button>
            </div>
            <div className="relative  ml-20 bg-transparent text-black z-0">
              <Image
                src={HeroImage}
                alt="Construction worker reviewing documents"
                className=" object-cover border-2 bg-transparent drop-shadow-2xl hover:scale-[101%] transition-all duration-600"
                width={700}
                height={700}
              />

              <div className="absolute -left-2 top-10 z-51 px-3 py-2 shadow-xl bg-green-100 outline-5 outline-slate-50 rounded-2xl hover:scale-105 transition-all duration-300">
                Build <span className="font-bold">Safely</span>
              </div>
              <div className="absolute -right-10 top-40 z-50 px-3 py-2 shadow-xl rounded-2xl outline-5 outline-slate-50 bg-slate-100 hover:scale-105 transition-all duration-300">
                Build <span className="font-bold">Legally</span>
              </div>
              <div className="absolute -left-5 bottom-10 z-50 px-3 py-2 shadow-xl rounded-2xl outline-5 outline-slate-50 bg-blue-100 hover:scale-105 transition-all duration-300">
                Build with <span className="font-bold">Confidence</span>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200/80 -z-10 rounded-full "></div>
              <div
                className="absolute -bottom-10 -left-6 w-12 h-12 bg-amber-200 rounded-full opacity-60"
                id="about"
              ></div>
            </div>
            <div className="absolute bottom-5 right-7 w-12 h-12 bg-green-800/40 rounded-full opacity-60"></div>

            {/* <div className="bg-[url(/hero/modernHouse.png)] bg-cover bg-center h-[400px] w-[400px] rounded-full shadow-lg hidden md:block">
              
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

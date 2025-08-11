"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ModernHouse from "@/public/modernHouse.png"; // Adjust the path as necessary

const Hero = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  return (
    <>
      {/* <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-4">Welcome to VDM Urban</h2>
          <p className="text-lg mb-8">
            Your partner in building compliance solutions
          </p>
          <a
            href="#services"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Explore Our Services
          </a>
        </div>
      </section> */}

      <section className=" text-white ">
        {/* <div className="relative">
          <Image
            src={ModernHouse}
            alt="Construction worker reviewing documents"
            className="rounded-lg shadow-xl w-full -z-0"
            // width={500}
            // height={500}
          />
        </div> */}
        <div className="container  mx-auto bg-[url('/ModernHouse.png')] bg-cover bg-center  -mt-20 relative border-2 border-blue-900">
          <div className="pt-28  bg-gray-900/70 h-[100%] w-[100%] px-14 py-16 ">
            <div className=" grid md:grid-cols-2 gap-8 items-center">
              <div className="">
                {/* <span className="flex mb-1">
                  Construction Compliance solutions
                </span> */}
                <h1 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight ">
                  BUILD LEGALLY
                  <br />
                  BUILD SAFELY
                  <br />
                  BUILD WITH CONFIDENCE
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-300">
                  We help builders, developers, and property owners in Lagos
                  stay compliant with building regulations — from permits to
                  safety and site reporting.
                </p>
                <button className="bg-transparent outline-2 text-white font-semibold py-3 px-6 rounded transition duration-300">
                  REQUEST A FREE COMPLIANCE REVIEW
                </button>
              </div>
              {/* <div className="relative">
              <Image
                src={ModernHouse}
                alt="Construction worker reviewing documents"
                className="rounded-lg shadow-xl w-full"
                width={500}
                height={500}
              />
            </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">WHO WE ARE</h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            VDM UrbanReg CompulanceSolutions Ltd. is a Lagos-based consultancy
            dedicated to helping individuals and organizations in the built
            industry meet compliance standards site-efficiently.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">OUR SERVICES</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 rounded flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Building construction approvals
                </h3>
                <p className="text-gray-600">
                  Guiding you through the approval process from application to
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 rounded flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Construction insurance procurement
                </h3>
                <p className="text-gray-600">
                  Assisting in securing essential insurance policies for your
                  projects and workers
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 rounded flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Uncaptured Building Reporting
                </h3>
                <p className="text-gray-600">
                  Identifying and documenting structures lacking regulatory
                  recognition
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 rounded flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Quality assurance audits
                </h3>
                <p className="text-gray-600">
                  Conducting comprehensive audits to maintain high standards of
                  quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Offerings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ADDITIONAL OFFERINGS
          </h2>
          <div className="space-y-4">
            <div
              className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition"
              onClick={() =>
                setExpandedService(expandedService === 0 ? null : 0)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">
                  Specialized Approval Services
                </h3>
                <ChevronRight
                  className={`w-6 h-6 transition-transform ${
                    expandedService === 0 ? "rotate-90" : ""
                  }`}
                />
              </div>
              {expandedService === 0 && (
                <p className="mt-4 text-gray-600">
                  Our team provides comprehensive support for complex approval
                  processes, ensuring your projects meet all regulatory
                  requirements efficiently.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">WHY CHOOSE US</h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            Creating a future where every structure in Nigeria is safe,
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;

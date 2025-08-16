"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <>
      {/* Our Services Section */}
      <section className="py-24 bg-blue-50/80 mt-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <p className="text-center text-slate-500 ">WHAT WE DO</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            {/* Service 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 rounded flex items-center justify-center">
                  {/* <svg
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
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="24"
                    // height="24"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M6 17c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1m6 0c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1m9.32-11.34L12.9 1.45c-.56-.28-1.23-.28-1.79 0L2.68 5.66c-.42.21-.68.64-.68 1.1C2 7.45 2.55 8 3.24 8h17.53C21.45 8 22 7.45 22 6.76c0-.46-.26-.89-.68-1.1M2 20c0 .55.45 1 1 1h11.4c-.21-.64-.32-1.31-.36-2H3c-.55 0-1 .45-1 1m17-7.74V11c0-.55-.45-1-1-1s-1 .45-1 1v2.26zm.55 1.96l-3 1.5c-.34.17-.55.52-.55.9v1.93c0 2.52 1.71 4.88 4 5.45c2.29-.57 4-2.93 4-5.45v-1.93c0-.38-.21-.73-.55-.89l-3-1.5a.99.99 0 0 0-.9-.01m-.97 6.08l-.8-.8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.44.44l1.88-1.85c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.23 2.21a.996.996 0 0 1-1.41 0"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Building Plan Approvals
                </h3>
                <p className="text-gray-600">
                  End-to-end processing with LASBCA, LASEPA, and other
                  regulatory bodies
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 rounded flex items-center justify-center">
                  {/* <svg
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
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    viewBox="0 0 48 48"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      fill="#ffffff"
                      d="M12.25 6.5a1.75 1.75 0 0 0-1.75 1.75V41.5h12.404l2.5 2.5H9.25C8.56 44 8 43.44 8 42.75V8.25A4.25 4.25 0 0 1 12.25 4h15.5A4.25 4.25 0 0 1 32 8.25V19h3.75A4.25 4.25 0 0 1 40 23.25v7.337a3.25 3.25 0 0 0-2.5.424V23.25a1.75 1.75 0 0 0-1.75-1.75h-5c-.69 0-1.25-.56-1.25-1.25v-12a1.75 1.75 0 0 0-1.75-1.75zM18 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m6-12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m5.634 4.634a1.25 1.25 0 0 0-1.768-1.768l-4.5 4.5a1.25 1.25 0 0 0 0 1.768l4.5 4.5a1.25 1.25 0 0 0 1.768-1.768L27.268 39.5h13.464l-2.366 2.366a1.25 1.25 0 0 0 1.768 1.768l4.5-4.5a1.25 1.25 0 0 0 0-1.768l-4.5-4.5a1.25 1.25 0 0 0-1.768 1.768L40.732 37H27.268z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Regulatory Liaison & Advisory
                </h3>
                <p className="text-gray-600">
                  We bridge the gap between clients and state agencies to
                  fast-track compliance
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
                  Identification and documentation of buildings that lack
                  government approvals.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 rounded flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="24"
                    // height="24"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-white"
                    // stroke="currentColor"
                  >
                    <g fill="none">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="#ffffff"
                        d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zM12 4.068L5 6.693v5.363a7 7 0 0 0 3.635 6.138l.235.123L12 19.882l3.13-1.565a7 7 0 0 0 3.865-5.997l.005-.264V6.693zm3.433 4.561a1 1 0 0 1 1.497 1.32l-.083.094l-5.234 5.235a1.1 1.1 0 0 1-1.46.085l-.096-.085l-2.404-2.404a1 1 0 0 1 1.32-1.498l.094.083l1.768 1.768z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Quality & Safety Monitoring
                </h3>
                <p className="text-gray-600">
                  Independent checks to ensure your project meets professional
                  standards
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 rounded flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M469.333 386.374c-.448.299-71.56 47.397-213.333 47.397c-141.772 0-212.885-47.098-213.333-47.397v-23.707h426.666zm-128-280.874c74.639 32.626 126.996 106.709 127.939 193.167h.061V320H42.667v-21.333h.062c.941-86.458 53.3-160.541 127.938-193.167V85.333h170.666zm-128 22.5v106.667h-32l-6.979-83.542c-46.406 25.35-79.717 71.665-87.292 126.208h337.875c-7.576-54.549-40.899-100.86-87.311-126.208l-6.959 83.542h-32V128z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Site Safety Inspection
                </h3>
                <p className="text-gray-600">
                  Conducting comprehensive audits to maintain high standards of
                  quality
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-900 rounded flex items-center justify-center">
                  {/* <svg
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
                  </svg> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="24"
                    // height="24"
                    className="w-8 h-8 text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#ffffff"
                      d="M13 1a2 2 0 0 1 2 2v6.25a.75.75 0 0 1-1.5 0V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h5.25a.75.75 0 0 1 0 1.5H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm1.22 10.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-.946.094l-.114-.094l-1-1l-.052-.056a.75.75 0 0 1 1.056-1.056l.056.052l.47.47zm-5.893-.716a.75.75 0 0 1 0 1.492L8.25 12h-3.5a.75.75 0 0 1 0-1.5h3.5zM11.25 7.25a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5zm0-3.25a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Compliance Site Audits
                </h3>
                <p className="text-gray-600">
                  We inspect construction sites for adherence to legal and
                  safety requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Offerings Section */}
      {/* <section className="py-16 bg-white max-w-[1240px] mx-auto">
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
      </section> */}
    </>
  );
};

export default Services;

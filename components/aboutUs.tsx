"use client";

import Image from "next/image";
import ImageOne from "@/public/hero/image1.jpg";
import ImageThree from "@/public/hero/image3.jpg";
import ImageEleven from "@/public/hero/image11.jpg";

const AboutUS = () => {
  return (
    <>
      {/* Achievements Section */}

      <div className="p-7 bg-white shadow-2xl mx-6 sm:mx-auto flex justify-center w-fit z-99 -mt-16 mb-15 rounded-2xl ">
        <ul className="flex gap-10 flex-wrap mx-auto justify-center py-8 min-[676px]:py-0">
          <li className="bg-slate-50 p-4 grid rounded-lg min-w-[180px]">
            <span className="font-bold text-3xl ">240+</span>
            Projects completed
          </li>
          <li className="bg-slate-50 p-4 grid min-w-[180px]">
            <span className="font-bold text-3xl">170+</span>
            Satisfied clients
          </li>
          <li className="bg-slate-50 p-4 grid min-w-[180px]">
            <span className="font-bold text-3xl">10+</span>
            Years of experience
          </li>
        </ul>
      </div>

      {/* Who We Are Section */}
      <section className="pt-12 pb-24 bg-white " id="about">
        <div className="container mx-auto px-6 sm:px-8 md:px-10 max-w-[1240px] relative">
          <p className=" font-semibold text-center text-slate-500 text-sm">
            ABOUT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#040485] z-10">
            Who We Are
          </h2>

          {/* Decorative elements */}
          <div
            className="absolute -bottom-16 left-[35%] w-18 h-18 bg-amber-300 rounded-full opacity-60"
            // id="about"
          ></div>
          <div className="absolute top-8 -left-4 w-40 h-40 bg-blue-200/60 rounded-full "></div>

          <div className="absolute bottom-5 right-7 w-60 h-60 bg-blue-100/50 rounded-full opacity-60 z-0"></div>

          {/* AboutUS Body */}
          <div className="grid lg:flex gap-12 sm:gap-20 mx-auto justify-center mt-12">
            <div className="max-w-[600px] lg:min-w-[500px] lg:max-h-[360px] grid grid-cols-2 gap-x-5 gap-y-4 z-20 order-2 md:order-1">
              <Image
                src={ImageOne}
                alt="vdm work-site"
                className="w-full h-auto rounded-xl outline-5 outline-white hover:scale-[103%] transition-all duration-300 shadow-2xl row-span-2"
                width={300}
                height={200}
              />

              <Image
                src={ImageThree}
                alt="Modern House"
                className="w-full h-auto rounded-xl outline-5 outline-white hover:scale-[102%] transition-all duration-300 shadow-2xl"
                width={300}
                height={200}
              />

              <Image
                src={ImageEleven}
                alt="Modern House"
                className="w-full h-auto rounded-xl outline-5 outline-white hover:scale-[103%] transition-all duration-300 shadow-2xl align-top"
                width={300}
                height={200}
              />
            </div>

            <div className="flex flex-col gap-5 text-lg text-gray-700 max-w-xl z-20 order-1 flex-1">
              <p className="">
                VDM UrbanReg Compliance Solutions Ltd. is a{" "}
                <strong>Lagos-based </strong> consultancy dedicated to helping
                individuals and organizations in the construction industry meet
                compliance standards.
              </p>
              <p className="">
                Whether you’re starting a new project or need to regularize an
                existing structure, we help you navigate the complexities of
                Lagos’ regulatory system legally and efficiently.
              </p>

              <p>
                We bridge the gap between property stakeholders and regulatory
                bodies including{" "}
                <strong>
                  LASBCA (Lagos State Building Control Agency), LASEPA (Lagos
                  State Environmental Protection Agency),
                </strong>{" "}
                other State and Local Government Authorities.
              </p>
              <button
                // id="contact"
                className=" w-fit outline-2 font-semibold py-3 px-8 rounded-lg transition-all duration-300 bg-blue-900 text-white cursor-pointer hover:scale-110"
              >
                Request Free Compliance Review
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUS;

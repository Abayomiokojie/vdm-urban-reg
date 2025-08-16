"use client";

import Image from "next/image";
import ImageOne from "@/public/hero/image1.jpg";
import ImageThree from "@/public/hero/image3.jpg";
import ImageEleven from "@/public/hero/image11.jpg";

const OtherSections = () => {
  return (
    <>
      {/* Who We Are Section */}
      <section className="pt-12 pb-24 bg-white ">
        <div className="container mx-auto px-4 max-w-[1240px] relative">
          <p className=" font-semibold text-center text-slate-500 text-sm">
            ABOUT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#040485]">
            Who We Are
          </h2>

          {/* Decorative elements */}
          <div
            className="absolute -bottom-16 left-[35%] w-18 h-18 bg-amber-300 rounded-full opacity-60"
            id="about"
          ></div>
          <div className="absolute top-8 -left-4 w-40 h-40 bg-blue-200/60 z-10 rounded-full "></div>

          <div className="absolute bottom-5 right-7 w-60 h-60 bg-blue-100/50 rounded-full opacity-60"></div>

          {/* AboutUS Body */}
          <div className="flex gap-24 mx-auto justify-center mt-12">
            <div className="max-w-[600px] grid grid-cols-2 grid-rows-2 gap-x-6 z-20">
              <Image
                src={ImageOne}
                alt="vdm work-site"
                className="w-full h-auto rounded-xl outline-5 outline-white hover:scale-[103%] transition-all duration-300  shadow-2xl row-span-2"
                width={300}
                height={200}
              />

              <Image
                src={ImageThree}
                alt="Modern House"
                className="w-full h-auto rounded-xl outline-5 outline-white hover:scale-[102%] transition-all duration-300  shadow-2xl"
                width={300}
                height={200}
              />

              <Image
                src={ImageEleven}
                alt="Modern House"
                className="w-full h-auto rounded-xl outline-5 outline-white hover:scale-[103%] transition-all duration-300 shadow-2xl"
                width={300}
                height={200}
              />
            </div>

            <div className="flex flex-col gap-5 text-lg text-gray-700 max-w-xl z-20">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtherSections;

const ChooseUs = () => {
  return (
    <>
      {/* Why choose US */}
      <section className="py-16 mt-8">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <p className="text-center text-slate-500 ">OUR VALUE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-16 justify-end">
            <div className="text-center max-w-[280px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mx-auto mb-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17v4" />
                <path d="M10 20l4 -2" />
                <path d="M10 18l4 2" />
                <path d="M5 17v4" />
                <path d="M3 20l4 -2" />
                <path d="M3 18l4 2" />
                <path d="M19 17v4" />
                <path d="M17 20l4 -2" />
                <path d="M17 18l4 2" />
                <path d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of the Lagos building regulatory framework{" "}
              </p>
            </div>
            <div className="text-center max-w-[280px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#040455"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
                <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                Professional, field-based inspections and advisory
              </p>
            </div>
            <div className="text-center max-w-[280px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mx-auto mb-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 10l-2 -6" />
                <path d="M7 10l2 -6" />
                <path d="M13 20h-5.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304" />
                <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                <path d="M19 21v1m0 -8v1" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Cost</h3>
              <p className="text-gray-600">
                Affordable compliance packages for individuals and developers
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;

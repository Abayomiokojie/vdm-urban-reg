export default function Testimonial() {
  return (
    <section className="py-24 bg-blue-100/40">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <p className=" text-center text-slate-500 text-sm">TESTIMONIALS</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              &quot;VDM UrbanReg Compliance Solutions Ltd. helped us navigate
              the complex regulatory landscape with ease. Their expertise is
              unmatched!&quot;
            </p>
            <h4 className="font-semibold">- John Doe, CEO of Example Corp</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              &quot;Thanks to VDM, we were able to secure our building permits
              without any hassle. Highly recommend their services!&quot;
            </p>
            <h4 className="font-semibold">- Jane Smith, Project Manager</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

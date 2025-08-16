const Achievements = () => {
  return (
    <>
      <div className="p-7 bg-white shadow-2xl mx-auto flex justify-center w-fit z-99 -mt-16 mb-15 rounded-2xl">
        {/* <h2 className="text-2xl font-bold mb-4">Our Achievements</h2> */}
        <ul className="flex gap-10">
          <li className="bg-slate-50 p-4 grid rounded-lg">
            <span className="font-bold text-3xl">240+</span>
            Projects completed
          </li>
          <li className="bg-slate-50 p-4 grid">
            <span className="font-bold text-3xl">170+</span>
            Satisfied clients
          </li>
          <li className="bg-slate-50 p-4 grid">
            <span className="font-bold text-3xl">10+</span>
            Years of experience
          </li>
        </ul>
      </div>
    </>
  );
};

export default Achievements;

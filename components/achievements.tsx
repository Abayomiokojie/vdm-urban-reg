const Achievements = () => {
  return (
    <>
      <div className="p-7 bg-white shadow-2xl mx-auto flex justify-center w-fit z-99 -mt-16 mb-15 rounded-2xl ">
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
    </>
  );
};

export default Achievements;

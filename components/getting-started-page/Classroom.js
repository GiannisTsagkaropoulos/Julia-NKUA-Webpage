function Classroom() {
  return (
    <div>
      <div className="w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center mx-auto">
        <div className="w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
        <h3 className="text-2xl lg:text-4xl 2xl:text-5xl text-julia-blue-light font-extrabold mx-auto text-center my-2 lg:my-4 tracking-wide col-span-1">
          In the Classroom
        </h3>
        <div className="w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
      </div>
      <div className="h-8"></div>
      <p className="text-lg lg:text-[1.3rem] w-10/12 mx-auto text-slate-600 font-normal text-justify">
        Julia is ready for the classroom. We encourage instructors to
        participate in the{" "}
        <a
          target="_blank"
          href="https://julialang.org/community/"
          className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
        >
          Julia community
        </a>{" "}
        for questions about Julia or specific packages. This page puts together
        various resources that instructors and students alike may find useful.
        See{" "}
        <a
          target="_blank"
          href="https://julialang.org/learning/classes/"
          className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
        >
          where Julia is being taught today
        </a>
        .
      </p>
      <div className="h-8"></div>
      <div className="w-10/12 mx-auto">
        <img
          className="rounded-md w-full "
          src="https://julialang.org/learning/assets/schools.png"
          alt="julia-in-the-classroom"
        />
      </div>
    </div>
  );
}

export default Classroom;

function Classroom() {
  return (
    <div>
      <div className="w-10/12 grid grid-cols-3 gap-4 place-items-center mx-auto">
        <div className="w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
        <h3 className="text-4xl text-julia-blue-light font-extrabold mx-auto text-center my-4 tracking-wide col-span-1">
          Julia Tutorials
        </h3>
        <div className="w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
      </div>
      <div className="h-8"></div>
      <p className="text-[1.5rem] w-10/12 mx-auto text-white font-normal">
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

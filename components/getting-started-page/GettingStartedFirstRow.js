function GettingStartedFirstRow() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center mx-auto w-10/12">
        <div className="w-full lg:w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
        <h3 className="text-2xl lg:text-4xl 2xl:text-5xl text-julia-blue-dark font-semibold lg:font-bold mx-auto text-center my-4 tracking-wide col-span-1 leading-10">
          Get Started with Julia
        </h3>
        <div className="w-full lg:w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
      </div>
      <div className="h-10"></div>
      <div className="lg:w-10/12 w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center mx-auto">
        <div className="h-full">
          <h4 className="text-3xl 2xl:text-4xl text-julia-blue-light font-medium mb-5 hover:underline lg:mb-10">
            {" "}
            <a href="https://nkuamath-julia.github.io/NASCA23/notebooks/julia_guide.html">
              Julia Team NKUA Interactive Cheatsheet
            </a>
          </h4>
          <p className="text-xl lg:text-[1.3rem] text-justify text-slate-600">
            Want a quick introduction to Julia in order to write your first
            programms? Check out the{" "}
            <a
              href="https://nkuamath-julia.github.io/NASCA23/notebooks/julia_guide.html"
              className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
            >
              basic julia knowledge guide
            </a>{" "}
            prepared by Julia NKUA Team's member, Anastasia Psitou.
          </p>
        </div>
        <div className="h-full">
          <h4 className="text-3xl 2xl:text-4xl text-julia-blue-light font-medium mb-5 hover:underline lg:mb-10">
            {" "}
            <a href="https://juliaacademy.com/courses?preview=logged_out">
              Julia Academy
            </a>
          </h4>
          <p className="text-xl lg:text-[1.3rem] text-justify text-slate-600">
            Do you learn best by watching instructor led videos on programming?
            Check out{" "}
            <a
              href="https://juliaacademy.com/courses?preview=logged_out"
              className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
            >
              Julia Academy
            </a>{" "}
            which was prepared by core Julia developers in collaboration with
            Julia Computing.
          </p>
        </div>

        <div className="h-full">
          <h4 className="text-3xl 2xl:text-4xl text-julia-blue-light font-medium mb-5 hover:underline lg:mb-10">
            {" "}
            <a href="https://exercism.org/tracks/julia">Exercism Julia Track</a>
          </h4>
          <p className="text-xl lg:text-[1.3rem] text-justify text-slate-600">
            Prefer to learn by doing exercises and getting feedback from a team
            of welcoming mentors? Check out the Julia Track on{" "}
            <a
              href="https://exercism.org/tracks/julia"
              className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
            >
              Exercism Julia Track
            </a>
            .
          </p>
        </div>
        <div className="h-full">
          <h4 className="text-3xl 2xl:text-4xl text-julia-blue-light font-medium mb-5 hover:underline lg:mb-10">
            <a href="https://docs.julialang.org/en/v1/manual/getting-started/">
              The Manual{" "}
            </a>
          </h4>
          <p className="text-xl lg:text-[1.3rem] text-justify text-slate-600">
            Want to just give it a shot and dive right into the Julia
            documentation? Check out the{" "}
            <a
              href="https://docs.julialang.org/en/v1/manual/getting-started/"
              className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
            >
              getting started guide
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default GettingStartedFirstRow;

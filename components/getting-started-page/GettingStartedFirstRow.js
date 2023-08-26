function GettingStartedFirstRow() {
  return (
    <section>
      <div className="w-10/12 grid grid-cols-3 gap-4 place-items-center mx-auto">
        <div className="w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
        <h3 className="text-4xl text-julia-blue-light font-extrabold mx-auto text-center my-4 tracking-wide col-span-1">
          Get Started with Julia
        </h3>
        <div className="w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
      </div>
      <div className="h-10"></div>
      <div className="lg:w-10/12 w-11/12 grid grid-cols-2 gap-10 place-items-center mx-auto">
        <div className="h-full">
          <h4 className="text-2xl md:text-3xl text-white font-medium mb-5">
            {" "}
            <a href="https://juliaacademy.com/courses?preview=logged_out">
              Julia Academy
            </a>
          </h4>
          <p className="text-xl text-justify">
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
          <h4 className="text-2xl md:text-3xl text-white font-medium mb-5">
            {" "}
            <a href="https://nkuamath-julia.github.io/NASCA23/notebooks/julia_guide.html">
              Julia Team NKUA Interactive Cheatsheet
            </a>
          </h4>
          <p className="text-xl text-justify">
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
          <h4 className="text-2xl md:text-3xl text-white font-medium mb-5">
            {" "}
            <a href="https://exercism.org/tracks/julia">Exercism Julia Track</a>
          </h4>
          <p className="text-xl text-justify">
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
          <h4 className="text-2xl md:text-3xl text-white font-medium mb-5">
            <a href="https://docs.julialang.org/en/v1/manual/getting-started/">
              The Manual{" "}
            </a>
          </h4>
          <p className="text-xl text-justify">
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

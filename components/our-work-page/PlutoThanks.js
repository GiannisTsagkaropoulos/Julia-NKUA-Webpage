function PlutoThanks() {
  return (
    <div>
      <h3 className="text-6xl  text-julia-blue-dark tracking-wider font-semibold text-center">
        A special thanks to{" "}
        <a
          target="_blank"
          href="https://plutojl.org"
          className="hover:text-julia-blue-dark hover:underline font-bold"
        >
          Pluto.jl
        </a>{" "}
      </h3>
      <div className="h-12"></div>
      <h3 className="text-4xl  text-slate-500 tracking-wider font-semibold text-center">
        Reactivity
      </h3>
      <h3 className="text-6xl tracking-wide text-gray-700 font-extrabold mx-auto text-center my-4 w-[60%]">
        Interactivity as a fundamental principle
      </h3>
      <p className="text-2xl text-julia-blue-light opacity-70 tracking-wider font-medium w-[75%] mx-auto  text-center">
        A simple, reactive programming environment for Julia. Your programming
        environment becomes interactive by splitting your code into multiple
        cells!
      </p>
      <div className="h-12"></div>
      <h3 className="text-4xl  text-slate-500 tracking-wider font-semibold text-center">
        Reproducibility
      </h3>
      <h3 className="text-6xl tracking-wide text-gray-700 font-extrabold mx-auto text-center my-4 w-[60%]">
        Pluto notebooks are reproducible by default
      </h3>
      <p className="text-2xl text-julia-blue-light opacity-70 tracking-wider font-medium w-[75%] mx-auto  text-center">
        Pluto goes to great lengths to make sure that someone else will be able
        to run your notebook when you're done! <br /> The result? A programming
        environment that prioritizes beginners over advanced users!
      </p>
      <div className="h-12"></div>
      <h3 className="text-4xl  text-slate-500 tracking-wider font-semibold text-center">
        Education
      </h3>
      <h3 className="text-6xl tracking-wide text-gray-700 font-extrabold mx-auto text-center my-4 w-[60%]">
        A programming environment designed for <em>learning and teaching</em>
      </h3>
      <div className="text-2xl tracking-wider font-medium w-[75%] mx-auto  text-center">
        <p className="text-julia-blue-light opacity-70">
          Crafted with the goal of creating a programming environment that is
          powerful, helpful and interactive, without being too intimidating for
          students and teachers.
        </p>
        <span className="text-julia-blue-dark text-2xl tracking-wider">
          {" "}
          The result?
        </span>
        <br />
        <p className="text-julia-blue-light opacity-70">
          {" "}
          A programming environment that prioritizes beginners over advanced
          users!
        </p>
      </div>
    </div>
  );
}

export default PlutoThanks;

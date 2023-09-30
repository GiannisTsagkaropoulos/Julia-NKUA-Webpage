function PlutoThanks() {
  return (
    <div>
      <h3 className="text-3xl lg:text-4xl  text-julia-blue-dark tracking-wider font-semibold text-center w-11/12">
        A special thanks to{" "}
        <a
          target="_blank"
          href="https://plutojl.org"
          className="hover:text-julia-blue-dark hover:underline font-bold"
        >
          Pluto.jl
        </a>{" "}
      </h3>
      <div className="h-6"></div>
      <p className="text-xl lg:text-2xl  text-gray-700 tracking-wider font-semibold text-justify lg:text-center w-10/12 mx-auto">
        The ultimate browser based notebook interface for the Julia language
        which allows presentation of Julia code & computational results in a
        tightly linked fashion.
      </p>
      <div className="h-28"></div>
      <h3 className="text-2xl lg:text-4xl  text-slate-500 tracking-wider font-semibold text-center">
        Reactivity
      </h3>
      <h3 className="text-3xl lg:text-5xl tracking-wide text-gray-700 font-extrabold mx-auto text-center my-4 w-[60%]">
        Interactivity as a fundamental principle
      </h3>
      <p className="text-lg lg:text-xl text-julia-blue-light opacity-70 tracking-wider font-medium w-[75%] mx-auto  text-justify lg:text-center">
        A simple, reactive programming environment for Julia. Your programming
        environment becomes interactive by splitting your code into multiple
        cells!
      </p>
      <div className="h-28"></div>
      <h3 className=" text-2xl lg:text-4xl  text-slate-500 tracking-wider font-semibold text-center">
        Reproducibility
      </h3>
      <h3 className="text-3xl lg:text-5xl tracking-wide text-gray-700 font-extrabold mx-auto text-center my-4 w-[60%]">
        Pluto notebooks are reproducible by default
      </h3>
      <p className="text-lg lg:text-xl text-julia-blue-light opacity-70 tracking-wider font-medium w-[75%] mx-auto  text-justify lg:text-center">
        Pluto goes to great lengths to make sure that someone else will be able
        to run your notebook when you're done!
      </p>
      <div className="h-28"></div>
      <h3 className=" text-2xl lg:text-4xl  text-slate-500 tracking-wider font-semibold text-center">
        Education
      </h3>
      <h3 className="text-3xl lg:text-5xl tracking-wide text-gray-700 font-extrabold mx-auto text-center my-4 w-[60%]">
        A programming environment designed for <em>learning and teaching</em>
      </h3>
      <div className="text-lg lg:text-xl tracking-wider font-medium w-[75%] mx-auto text-justify lg:text-center">
        <p className="text-julia-blue-light opacity-70 ">
          Crafted with the goal of creating a programming environment that is
          powerful, helpful and interactive, without being too intimidating for
          students and teachers.
        </p>
        <span className="text-julia-blue-dark text-xl lg:text-2xl tracking-wider text-center">
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

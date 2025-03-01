function JuliaTutorials() {
  return (
    <div>
      <div className="w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center mx-auto">
        <div className="w-full lg:w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
        <h3 className="text-2xl lg:text-4xl 2xl:text-5xl text-julia-blue-dark font-extrabold mx-auto text-center my-2 lg:my-4 tracking-wide col-span-1">
          Julia Tutorials
        </h3>
        <div className="w-full lg:w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
      </div>
      <div className="h-8"></div>
      <div>
        <p className="text-lg lg:text-[1.3rem] w-10/12 mx-auto text-slate-600 font-normal text-justify">
          A non-exhaustive list of community provided Julia tutorials is also
          available. Check them out to{" "}
          <a
            target="_blank"
            href="https://julialang.org/learning/tutorials/"
            className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
          >
            learn Julia through the lens of someone from the community
          </a>
          .
        </p>
        <div className="h-8"></div>
        <p className="text-lg lg:text-[1.3rem] w-10/12 mx-auto text-slate-600 font-normal text-justify">
          There also exist a growing number of curated Julia courses in the form
          of video lecture series. These courses are freely available on{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/user/JuliaLanguage"
            className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
          >
            YouTube
          </a>
          . You can also sign up through{" "}
          <a
            target="_blank"
            href="https://juliaacademy.com"
            className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
          >
            JuliaAcademy
          </a>{" "}
          to track your progress, take quizzes, and get certificates.
        </p>
      </div>
    </div>
  );
}

export default JuliaTutorials;

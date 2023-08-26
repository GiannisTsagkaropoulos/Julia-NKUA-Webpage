function JuliaTutorials() {
  return (
    <div>
      <div className="w-10/12 grid grid-cols-3 gap-4 place-items-center mx-auto">
        <div className="w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center" />
        <h3 className="text-4xl text-julia-blue-light font-extrabold mx-auto text-center my-4 tracking-wide col-span-1">
          Julia Tutorials
        </h3>
        <div className="w-[100%] h-[0.12rem] bg-julia-blue-dark flex items-center"></div>
      </div>
      <div className="h-8"></div>
      <div>
        <p className="text-xl w-10/12 mx-auto text-white font-normal">
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
        <p className="text-xl w-10/12 mx-auto text-white font-normal">
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

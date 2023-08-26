function Youtube() {
  return (
    <div className="w-10/12 bg-white/90 rounded-md mx-auto mt-12">
      <div className="w-11/12 grid grid-cols-3 gap-4 place-items-center mx-auto">
        <div className="w-[100%] bg-julia-red-light h-[0.12rem] flex items-center" />
        <h3 className="text-4xl text-julia-red-light font-extrabold mx-auto text-center my-4 tracking-wide col-span-1">
          Youtube
        </h3>
        <div className="w-[100%] bg-julia-red-light h-[0.12rem] flex items-center" />
      </div>
      <div className="mx-12 py-5">
        <p className="text-xl font-normal leading-8 text-gray-700 text-left mb-4">
          <span className="text-julia-blue-dark">• </span>
          <a
            target="_blank"
            href="https://www.youtube.com/user/JuliaLanguage/playlists"
            className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
          >
            The Julia Language's YouTube
          </a>{" "}
          is the one stop shop for all things Julia on YouTube. From JuliaCon
          recordings to virtual meetups on technical topics, this channel hosts
          much of the existing community created Julia content. There are also a{" "}
          <a
            target="_blank"
            href="https://julialang.org/learning/mooc/"
            className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
          >
            few MOOC's
          </a>{" "}
          that have been created using Julia. <br /> <br />
          The official Julia team also has a{" "}
          <a
            target="_blank"
            href="https://julialang.org/learning/notebooks/"
            className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
          >
            curated set of Julia video tutorials
          </a>{" "}
          that have accompanying Jupyter Notebooks viewers can follow along
          with.
        </p>
        <p className="text-xl font-normal leading-8 text-gray-700 text-left mb-4">
          <span className="text-julia-blue-dark">• </span>
          <a
            target="_blank"
            href="https://www.youtube.com/@doggodotjl/featured"
            className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
          >
            doggo dot jl
          </a>{" "}
          (fka julia for talented amateurs), is an exploration to Julia
          wilderness and an attempt to make Julia more accessible. Adventure
          awaits!
        </p>

        <p className="text-xl font-normal leading-8 text-gray-700 text-left mb-4">
          <span className="text-julia-blue-dark">• </span>
          <a
            target="_blank"
            href="https://www.youtube.com/@JuliaHubInc/featured"
            className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
          >
            JuliaHub
          </a>{" "}
          is a single place for modeling, simulation, machine learning, user
          built applications & much more with the Julia language.
        </p>
        <p className="text-xl font-normal leading-8 text-gray-700 text-left">
          <span className="text-julia-blue-dark">• </span>
          <a
            target="_blank"
            href="https://www.youtube.com/@DJsOfficeHours"
            className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
          >
            DJ's Office Hours
          </a>{" "}
          to learn about Julia Basics, Data Structures & advanced topics, such
          as Solving ODEs, making animations & much more!
        </p>
      </div>
    </div>
  );
}

export default Youtube;

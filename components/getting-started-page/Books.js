function Books() {
  return (
    <div>
      <div className="w-10/12 grid grid-cols-3 gap-4 place-items-center mx-auto">
        <div className="w-[100%] h-[0.12rem] bg-julia-red-light flex items-center" />
        <h3 className="text-2xl lg:text-4xl 2xl:text-5xl text-julia-red-light font-extrabold mx-auto text-center my-4 tracking-wide col-span-1">
          Books
        </h3>
        <div className="w-[100%] h-[0.12rem] bg-julia-red-light flex items-center" />
      </div>
      <div className="h-8"></div>

      <p className="text-lg lg:text-[1.3rem] w-10/12 mx-auto text-white font-normal text-justify">
        Interested in getting a Julia book? Check out the{" "}
        <a
          href="https://julialang.org/learning/books/"
          className="text-julia-blue-light hover:text-julia-blue-dark hover:underline"
        >
          amazing books members of our community have written
        </a>{" "}
        since Julia was created.
      </p>
    </div>
  );
}

export default Books;

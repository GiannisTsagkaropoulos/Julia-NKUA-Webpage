export default function JuliaCharacteristics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 box-border w-10/12 m-auto mb-24">
      <div className="box-border flex flex-row gap-8 items-start leading-relaxed m-2 p-4 bg-white border-4 border-[#4e64ae92] rounded-lg shadow-md text-justify">
        <div className="basis-4/6 grow shrink flex flex-col">
          <h3 className="text-[#272727] font-bold text-xl mb-4">Fast</h3>
          <p className="my-4 text-lg">
            Julia was designed from the beginning for{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="/benchmarks/"
            >
              high performance
            </a>
            . Julia programs compile to efficient native code for{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="/downloads/#currently_supported_platforms"
            >
              multiple platforms{" "}
            </a>
            via LLVM.
          </p>
        </div>
      </div>
      <div className="box-border flex flex-row gap-8 items-start leading-relaxed m-2 p-4 bg-white border-4 border-[#4e64ae92] rounded-lg shadow-md text-justify">
        <div className="basis-4/6 grow shrink flex flex-col">
          <h3 className="text-[#272727] font-bold text-xl mb-4">Dynamic</h3>
          <p className="my-4 text-lg">
            Julia is{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://docs.julialang.org/en/v1/manual/types/"
            >
              dynamically typed
            </a>
            , feels like a scripting language, and has good support for{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://docs.julialang.org/en/v1/stdlib/REPL/"
            >
              interactive{" "}
            </a>
            use.
          </p>
        </div>
      </div>
      <div className="box-border flex flex-row gap-8 items-start leading-relaxed m-2 p-4 bg-white border-4 border-[#4e64ae92] rounded-lg shadow-md text-justify">
        <div className="basis-4/6 grow shrink flex flex-col">
          <h3 className="text-[#272727] font-bold text-xl mb-4">
            Reproducible
          </h3>
          <p className="my-4 text-lg">
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://julialang.github.io/Pkg.jl/v1/environments/"
            >
              Reproducible environments
            </a>{" "}
            make it possible to recreate the same Julia environment every time,
            across platforms, with{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://binarybuilder.org"
            >
              pre-built binaries
            </a>
          </p>
        </div>
      </div>
      <div className="box-border flex flex-row gap-8 items-start leading-relaxed m-2 p-4 bg-white border-4 border-[#4e64ae92] rounded-lg shadow-md text-justify">
        <div className="basis-4/6 grow shrink flex flex-col">
          <h3 className="text-[#272727] font-bold text-xl mb-4">Composable</h3>
          <p className="my-4 text-lg">
            Julia uses{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://docs.julialang.org/en/v1/manual/methods/"
            >
              multiple dispatch
            </a>{" "}
            as a paradigm, making it easy to express many object-oriented and{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://docs.julialang.org/en/v1/manual/functions/"
            >
              functional
            </a>{" "}
            programming patterns. The talk on the{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://www.youtube.com/watch?v=kc9HwsxE1OY"
            >
              Unreasonable Effectiveness of Multiple Dispatch
            </a>{" "}
            explains why it works so well.
          </p>
        </div>
      </div>
      <div className="box-border flex flex-row gap-8 items-start leading-relaxed m-2 p-4 bg-white border-4 border-[#4e64ae92] rounded-lg shadow-md text-justify">
        <div className="basis-4/6 grow shrink flex flex-col">
          <h3 className="text-[#272727] font-bold text-xl mb-4">General</h3>
          <p className="my-4 text-lg">
            Julia provides{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://docs.julialang.org/en/v1/manual/networking-and-streams/"
            >
              asynchronous I/O
            </a>
            ,{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://docs.julialang.org/en/v1/manual/metaprogramming/"
            >
              metaprogramming
            </a>
            ,{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://github.com/JuliaDebug/Debugger.jl"
            >
              debugging
            </a>
            ,{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://docs.julialang.org/en/v1/stdlib/Logging/"
            >
              logging
            </a>
            ,{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://docs.julialang.org/en/v1/manual/profile/"
            >
              profiling
            </a>
            , a{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://docs.julialang.org/en/v1/stdlib/Pkg/index.html"
            >
              package manager
            </a>
            , and more. One can build entire{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://www.youtube.com/watch?v=uLhXgt_gKJc"
            >
              Applications and Microservices
            </a>{" "}
            in Julia.
          </p>
        </div>
      </div>
      <div className="box-border flex flex-row gap-8 items-start leading-relaxed m-2 p-4 bg-white border-4 border-[#4e64ae92] rounded-lg shadow-md text-justify">
        <div className="basis-4/6 grow shrink flex flex-col">
          <h3 className="text-[#272727] font-bold text-xl mb-4">Open source</h3>
          <p className="my-4 text-lg">
            Julia is an open source project with over 1,400 contributors. It is
            made available under the{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://github.com/JuliaLang/julia/blob/master/LICENSE.md"
            >
              MIT license
            </a>
            . The{" "}
            <a
              className="text-[#4e64ae] font-semibold no-underline"
              href="https://github.com/JuliaLang/julia"
            >
              source code
            </a>{" "}
            is available on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}

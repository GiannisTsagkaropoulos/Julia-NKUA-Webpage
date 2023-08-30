import CardGrid from "@/components/notebooks/CardGrid";
import PlutoThanks from "@/components/our-work-page/PlutoThanks";
import { NOTEBOOKS } from "@/data/pluto-notebooks";

export default function OurWork() {
  return (
    <div className="z-1">
      <section className="h-fit bg-purple-50">
        <div className="w-10/12 mx-auto flex flex-col items-center">
          <div className="h-12"></div>
          <h3 className="w-11/12 text-xl lg:text-4xl lg:w-7/12 mx-auto tracking-wider font-medium text-justify lg:text-center ">
            <span className="text-julia-blue-light opacity-70">
              Crafted for accessibility and engagement,{" "}
            </span>
            <span className="text-julia-blue-dark">our work</span>{" "}
            <span className="text-julia-blue-light opacity-70">
              is an effort to transform learning into an enjoyable and
              approachable journey.
            </span>
          </h3>
          <div className="h-12"></div>
          <p className="w-10/12 text-lg lg:text-2xl font-medium lg:w-2/5  text-slate-600 mx-auto text-justify ">
            We present a brief introduction & guide to Julia language. We
            examine calculation of pivot patterns emerging from application of
            GECP in Hadamard matrices, Benchmarks between Julia, Matlab & Python
            in applications of matrix computations & the Newton-Raphson method,
            Base conversion programs, Polynomial Interpolation, Natural Cubic
            Splines, Accuracy of different expressions of equal quantities.
          </p>
          <div className="h-24"></div>
        </div>
        <CardGrid notebooks={NOTEBOOKS} />
        <div className="h-24"></div>
        <PlutoThanks />
        <div className="h-24"></div>
      </section>
    </div>
  );
}

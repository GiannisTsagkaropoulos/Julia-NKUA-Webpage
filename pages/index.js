import JuliaCharacteristics from "@/components/starting-page/julia-characteristics";
import CaseStudyGrid from "@/components/starting-page/CaseStudyGrid";
import { CASE_STUDIES } from "@/data/case-studies";
import { Fragment } from "react";
import Head from "next/head";

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Julia NKUA</title>
        <meta
          name="description"
          content="Characteristics of Julia language, which make it great for scientific computing & case studies of huge companies and coorporations using julia for their computations"
        />
      </Head>

      <main className="z-1">
        <div className="h-16 2xl:h-[4.5rem]"></div>
        <section className="h-fit bg-purple-50">
          <div className="max-w-2xl text-center grid grid-cols-1 gap-4 place-items-center mx-auto">
            <div className="mt-16 mb-24">
              <h3 className="text-2xl lg:text-3xl 2xl:text-4xl  text-julia-blue-dark opacity-100 tracking-wider font-semibold">
                JULIA PROGRAMMING
              </h3>
              <h3 className="text-4xl lg:text-5xl 2xl:text-6xl text-gray-700 font-extrabold mx-auto text-center my-4">
                A fresh approach to scientific computing
              </h3>
              <h3 className="text-xl lg:text-2xl text-julia-blue-light opacity-70 tracking-wider font-medium">
                We are greedy: we want more.
              </h3>
            </div>
          </div>
          <JuliaCharacteristics />
        </section>

        <section className="h-fit bg-indigo-50 z-1">
          <div className="max-w-7xl text-center grid grid-cols-1 gap-4 place-items-center mx-auto">
            <div className="mt-16 mb-28">
              <h3 className="text-2xl lg:text-3xl 2xl:text-4xl  text-julia-blue-dark opacity-100 tracking-widest font-semibold ">
                TRUSTED BY GIANTS
              </h3>
              <h3 className="text-4xl lg:text-5xl 2xl:text-6xl text-gray-700 font-extrabold mt-8">
                On a mission to make{" "}
                <span className="text-julia-blue-light opacity-70">
                  scientific computing
                </span>{" "}
                more{" "}
                <span className="text-julia-blue-light opacity-70">
                  accessible and fun
                </span>{" "}
                .
              </h3>
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <CaseStudyGrid caseStudies={CASE_STUDIES} />
          </div>
          <div className="flex justify-center mt-12">
            <a
              target="_blank"
              href="https://juliahub.com/case-studies/"
              className="mx-auto bg-julia-blue-light hover:bg-julia-blue-dark px-8 py-3 rounded-lg text-white text-xl font-bold"
            >
              See more
            </a>
          </div>
          <div className="h-12"></div>
        </section>
      </main>
    </Fragment>
  );
}

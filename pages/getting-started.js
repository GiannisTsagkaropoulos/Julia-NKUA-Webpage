import { Fragment } from "react";
import Head from "next/head";

import JuliaSentences from "@/components/getting-started-page/JuliaSentences";
import GettingStartedFirstRow from "@/components/getting-started-page/GettingStartedFirstRow";
import Youtube from "@/components/getting-started-page/Youtube";
import JuliaTutorials from "@/components/getting-started-page/JuliaTutorials";
import TutorialGrid from "@/components/getting-started-page/TutorialGrid";
import { TUTORIALS } from "@/data/julia-tutorials";
import Books from "@/components/getting-started-page/Books";
import BookGrid from "@/components/getting-started-page/BookGrid";
import { JULIA_BOOKS } from "@/data/julia-books";
import Classroom from "@/components/getting-started-page/Classroom";

export default function GettingStartedPage() {
  return (
    <Fragment>
      <Head>
        <title>Getting Started</title>
        <meta
          name="description"
          content="This guide is intended for users of all levels who want to use Julia for scientific computations. At first you can find: a quick introduction about Julia syntax, variables, functions etc, instructor led videos on programming, a site where you submit exercises and gett feedback from a team of welcoming mentors, and links to julia documentation. There are links to youtube channels Julia which attempt to make Julia more accessible & fun to learn, while some dive into deep math topics. There also is a non-exhaustive list of community provided Julia tutorials for all levels. Interested in getting a book? We provide links to books written about Julia or books that use julia for their computations. Lastly, we provide a list of where Julia is being taught today."
        />
      </Head>
      <main className="z-1">
        <div className="h-20 lg:h-28"></div>
        <section className="h-fit bg-[#b0badf]">
          <div className="h-12"></div>
          <JuliaSentences />
          <div className="h-12"></div>
          <GettingStartedFirstRow />
          <div className="lg:h-24"></div>
          <Youtube />
          <div className="h-24"></div>
          <JuliaTutorials />
          <div className="h-12"></div>
          <TutorialGrid tutorials={TUTORIALS} />
          <div className="h-24"></div>
          <Books />
          <div className="h-12"></div>
          <BookGrid books={JULIA_BOOKS} />
          <div className="h-24"></div>
          <Classroom />
          <div className="h-24"></div>
        </section>
      </main>
    </Fragment>
  );
}

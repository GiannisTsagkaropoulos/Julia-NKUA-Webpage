import JuliaSentences from "@/components/getting-started-page/JuliaSentences";
import GettingStartedFirstRow from "@/components/getting-started-page/GettingStartedFirstRow";
import Youtube from "@/components/getting-started-page/Youtube";
import JuliaTutorials from "@/components/getting-started-page/JuliaTutorials";
import TutorialGrid from "@/components/getting-started-page/TutorialGrid";
import { TUTORIALS } from "@/data/julia-tutorials";
import Books from "@/components/getting-started-page/Books";
import BookGrid from "@/components/getting-started-page/BookGrid";
import { JULIA_BOOKS } from "@/data/julia-books";

export default function GettingStartedPage() {
  return (
    <main className="z-1">
      <section className="h-fit bg-gradient-to-r from-indigo-200 to-indigo-300">
        <div className="h-12"></div>
        <JuliaSentences />
        <div className="h-12"></div>
        <GettingStartedFirstRow />
        <div className="h-12"></div>
        <Youtube />
        <div className="h-12"></div>
        <JuliaTutorials />
        <div className="h-12"></div>
        <TutorialGrid tutorials={TUTORIALS} />
        <div className="h-12"></div>
        <Books />
        <div className="h-12"></div>
        <BookGrid books={JULIA_BOOKS} />
      </section>
    </main>
  );
}

import { NOTEBOOKS } from "@/data/pluto-notebooks";
import Card from "./Card";

export default function CardGrid(props) {
  return (
    <section className="grid bg-blue-200 grid-cols-1 gap-10 place-items-center m-10 lg:grid-cols-2">
      {NOTEBOOKS.map((notebook) => {
        return (
          <Card
            link={notebook.link}
            thumbnail={notebook.thumbnail}
            title={notebook.title}
            content={notebook.content}
            author={notebook.author}
            tags={notebook.tags}
          />
        );
      })}
    </section>
  );
}

import CardGrid from "@/components/notebooks/CardGrid";
import { NOTEBOOKS } from "@/data/pluto-notebooks";

export default function OurWork() {
  return (
    <div>
      <CardGrid
        notebooks={NOTEBOOKS}
        //   title={notebook.title}
        //   link={notebook.link}
        //   thumbnail={notebook.thumbnail}
        //   content={notebook.content}
        //   tags={notebook.tags}
        //   author={notebook.author}
      />
    </div>
  );
}

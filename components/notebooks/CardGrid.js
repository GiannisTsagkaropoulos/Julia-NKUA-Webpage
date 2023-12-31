import Card from "./Card";

export default function CardGrid(props) {
  return (
    <section className="grid list-none md:grid-cols-2 gap-6  lg:gap-10 xl:grid-cols-3 w-10/12 mx-auto z-1 bg-julia-blue-light/5 rounded-lg p-8">
      {props.notebooks.map((notebook) => {
        return (
          <Card
            key={notebook.id}
            link={notebook.link}
            thumbnail={notebook.thumbnail}
            title={notebook.title}
            content={notebook.content}
            author={notebook.author}
            tags={notebook.tags}
          ></Card>
        );
      })}
    </section>
  );
}

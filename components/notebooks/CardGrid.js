import Card from "./Card";

export default function CardGrid(props) {
  return (
    <section className="grid list-none grid-cols-1 gap-10 place-items-center lg:grid-cols-2 z-1">
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

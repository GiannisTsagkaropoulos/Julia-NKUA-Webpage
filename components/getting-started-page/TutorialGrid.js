import TutorialCard from "./TutorialCard";

function TutorialGrid(props) {
  return (
    <section className="grid list-none grid-cols-1 gap-10 place-items-center lg:grid-cols-2 2xl:grid-cols-3 z-1 w-10/12 mx-auto bg-julia-blue-light/10 rounded-lg p-8">
      {props.tutorials.map((notebook) => {
        return (
          <TutorialCard
            key={notebook.id}
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

export default TutorialGrid;

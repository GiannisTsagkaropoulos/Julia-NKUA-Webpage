import BooksCard from "./BooksCard";

function BookGrid(props) {
  return (
    <section
      target="_blank"
      href="https://julialang.org/learning/books/"
      className="grid list-none grid-cols-3 gap-10 place-items-center xl:grid-cols-5 z-1 w-10/12 mx-auto bg-julia-blue-light/10 hover:cursor-pointer rounded-lg p-8"
    >
      {props.books.map((book) => {
        return (
          <BooksCard
            key={book.id}
            link={book.link}
            title={book.title}
            image={book.image}
          />
        );
      })}
    </section>
  );
}

export default BookGrid;

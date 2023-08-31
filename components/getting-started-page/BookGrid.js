import BooksCard from "./BooksCard";

function BookGrid(props) {
  return (
    <section className="grid list-none gap-10 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 z-1 w-10/12 mx-auto bg-julia-blue-light/10 rounded-lg p-8">
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

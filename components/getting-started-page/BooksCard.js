function BooksCard(props) {
  return (
    <a
      target="_blank"
      href={props.link}
      className="flex justify-center align-middle rounded-lg shadow-md border-[3px] border-julia-blue-light/50  hover:border-julia-blue-light hover:cursor-pointer transition duration-10"
    >
      <img
        class="h-[19rem] w-56 object-cover center"
        src={props.image}
        alt={props.title}
      />
    </a>
  );
}

export default BooksCard;
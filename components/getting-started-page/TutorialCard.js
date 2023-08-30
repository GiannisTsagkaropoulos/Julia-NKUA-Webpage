function TutorialCard(props) {
  return (
    <a
      target="_blank"
      href={props.link}
      className="flex flex-col bg-neutral-50 rounded-lg shadow-md border-[3px] border-julia-blue-light/50 w-[20rem] h-[28rem] md:w-[26rem] md:h-[32rem] hover:border-julia-blue-light hover:cursor-pointer transition duration-10"
    >
      <div className="my-row grow">
        <div className="rounded-md max-h-56 w-full overflow-hidden">
          <img
            className="w-full h-full object-center object-cover shadow-sm "
            src={props.thumbnail}
            alt={props.title}
          />
        </div>
        <div className="px-2">
          <h2 className="text-julia-blue-light py-3 font-medium text-left text-lg lg:text-xl">
            {props.title}
          </h2>
          <p className="tracking-wider text-justify text-gray-600 text-sm lg:text-base">
            {props.content}
          </p>
        </div>
      </div>

      <div className="my-row">
        <ul className="flex flex-wrap justify-starts items-center text-xs md:text-sm text-white font-medium ml-2">
          {props.tags.map((tag) => (
            <li
              key={tag.id}
              className={`p-1 lg:p-3 rounded-3xl text-xs lg:text-base m-1 ${tag.color} ${tag.hover} hover:cursor-pointer`}
            >
              {tag.title}
            </li>
          ))}
        </ul>
        <div className="w-11/12 bg-gray-200 h-[0.12rem] mx-auto my-2" />

        <div className="flex items-center justify-between mb-3 mx-4">
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full object-cover hidden lg:block"
              src={props.author.image}
              alt={props.author.name}
            />
            <p className="text-gray-700 text-base ml-3">{props.author.name}</p>
          </div>
          <p className="text-julia-blue-light text-lg font-bold">FREE</p>
        </div>
      </div>
    </a>
  );
}

export default TutorialCard;

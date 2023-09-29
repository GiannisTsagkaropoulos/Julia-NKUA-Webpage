export default function Card(props) {
  return (
    <div className="flex flex-col bg-neutral-50 rounded-lg shadow-md border-[3px] border-julia-blue-light/30 w-full sm:w-[80%] md:w-[60%] lg:w-[90%] hover:border-julia-blue-light  transition mx-auto">
      <div className="my-row grow">
        <a target="_blank" href={props.link} className="hover:cursor-pointer">
          <div className="rounded-md w-full overflow-hidden">
            <img
              className="w-full h-full object-center object-cover shadow-sm "
              src={props.thumbnail}
              alt={props.title}
            />
          </div>
          <div className="px-6">
            <h2 className="text-julia-purple-light py-3 font-semibold text-center text-xl 2xl:text-2xl">
              {props.title}
            </h2>
            <p className="tracking-wide text-justify text-gray-600 text-md 2xl:text-lg">
              {props.content}
            </p>
          </div>
        </a>
      </div>

      <div className="my-row">
        <ul className="flex flex-wrap justify-start items-center py-3 my-3 text-xs md:text-xxs text-white font-medium w-11/12 mx-auto">
          {props.tags.map((tag) => (
            <li
              key={tag.id}
              className={`p-[0.5rem] lg:text-xs rounded-3xl m-1 ${tag.color}`}
            >
              {tag.title}
            </li>
          ))}
        </ul>

        <div className="w-11/12 bg-gray-200 h-[0.12rem] mx-auto my-2" />

        <a
          target="_blank"
          href={props.author.socialLink}
          className="hover:cursor-pointer hover:font-extrabold align"
        >
          <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 mb-2">
            <img
              className="w-[3.5rem] h-[3.5rem] justify-self-center rounded-full object-cover hidden lg:col-span-1 lg:block"
              src={props.author.image}
              alt={props.author.name}
            />
            <div className="flex flex-col justify-center lg:col-span-2  ">
              <h3 className="text-gray-700 font-bold text-center align-bottom text-md 2xl:text-xl hover:text-gray-900">
                {props.author.name}{" "}
              </h3>
              <p className="text-gray-400 text-center font-semibold text-md 2xl:text-lg">
                {props.author.status}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

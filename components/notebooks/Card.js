export default function Card(props) {
  return (
    <div className="flex flex-col bg-neutral-50 rounded-lg shadow-md border-[3px] border-julia-blue-light/30 w-[25rem] hover:border-julia-blue-light  transition mx-auto">
      {/* <a target="_blank" href={props.link} className="hover:cursor-pointer">
        <img
          className="rounded-t-lg px-[-1.5rem] w-full object-cover shadow-md  hover:-translate-y-[3px] hover:shadow-xl duration-200"
          src={props.thumbnail}
          alt={props.title}
        />

        <div className="px-6">
          <h2 className="text-julia-purple-light  py-3 font-semibold text-center text-3xl">
            {props.title}
          </h2>
          <p className="tracking-wider text-justify text-gray-600 text-xl">
            {props.content}
          </p>
        </div>
      </a> */}

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
            <h2 className="text-julia-purple-light py-3 font-semibold text-center text-2xl">
              {props.title}
            </h2>
            <p className="tracking-wide text-justify text-gray-600 text-lg">
              {props.content}
            </p>
          </div>
        </a>
      </div>

      <div className="my-row">
        <ul className="flex flex-wrap justify-start items-center py-3 my-3 text-xxs md:text-xxs text-white font-medium w-11/12 mx-auto">
          {props.tags.map((tag) => (
            <li
              key={tag.id}
              className={`p-[0.65rem] rounded-3xl m-1 ${tag.color}`}
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
              className="w-20 h-20 justify-self-center  rounded-full object-cover hidden lg:col-span-1 lg:block"
              src={props.author.image}
              alt={props.author.name}
            />
            <div className="flex flex-col justify-center lg:col-span-2  ">
              <h3 className="text-gray-700 font-bold text-center align-bottom text-2xl lg:text-xl hover:text-gray-900">
                {props.author.name}{" "}
              </h3>
              <p className="text-gray-400 text-center font-semibold text-xl lg:text-lg">
                {props.author.status}
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* <a
        href={props.author.socialLink}
        className="hover:cursor-pointer hover:font-extrabold align"
      >
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 hover:scale-[1.005] hover:-translate-y-[1px] duration-150 mb-2">
          <img
            className="w-20 h-20 justify-self-center  rounded-full object-cover hidden lg:col-span-1 lg:block"
            src={props.author.image}
            alt={props.author.name}
          />
          <div className="flex flex-col justify-center lg:col-span-2  ">
            <h3 className="text-gray-700 font-bold text-center align-bottom text-2xl lg:text-xl hover:text-gray-900">
              {props.author.name}{" "}
            </h3>
            <p className="text-gray-500 text-center font-semibold text-xl lg:text-lg">
              {props.author.status}
            </p>
          </div>
        </div>
      </a> */}
    </div>
  );
}

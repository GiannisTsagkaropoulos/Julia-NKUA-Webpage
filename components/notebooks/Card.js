export default function Card(props) {
  return (
    <div
      className="bg-neutral-50 col-span-1 rounded-lg shadow-md text-3xl ease-in-out
            hover:scale-[1.01] hover:-translate-y-[2px] hover:shadow-lg duration-[60ms] w-[25rem]"
    >
      <a href={props.link} className="hover:cursor-pointer ">
        <img
          className="rounded-t-lg px-[-1.5rem] w-full object-cover shadow-md  hover:-translate-y-[3px] hover:shadow-xl duration-200"
          src={props.thumbnail}
          alt={props.title}
        />
      </a>
      <div className="px-6">
        <h2 className="text-julia-purple-light hover:text-julia-purple-dark py-3 font-semibold text-center text-3xl">
          {props.title}
        </h2>
        <p className="tracking-wider text-justify text-gray-600 text-xl hover:cursor-text">
          {props.content}
        </p>
        <ul className="flex flex-wrap justify-starts items-center py-3 border-b-2 my-3 text-xs md:text-sm text-white font-medium">
          {props.tags.map((tag) => (
            <li
              key={tag.id}
              className={`p-3 rounded-3xl m-1 ${tag.color} ${tag.hover} hover:cursor-pointer`}
            >
              {tag.title}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={props.author.socialLink}
        className="hover:cursor-pointer hover:font-extrabold align"
      >
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 hover:scale-[1.005] hover:-translate-y-[1px] duration-150 mb-2">
          <img
            className="w-20 h-20 justify-self-center  rounded-full object-cover hidden lg:col-span-1 lg:block"
            src={props.author.image}
            alt=""
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
      </a>
    </div>
  );
}

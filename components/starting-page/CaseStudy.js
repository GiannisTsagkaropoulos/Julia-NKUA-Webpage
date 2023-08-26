function CaseStudy(props) {
  return (
    <a
      target="_blank"
      href={props.link}
      className="mb-8  hover:scale-[1.01] hover:-translate-y-[2px] duration-[60ms]"
    >
      <div>
        <h3>
          <span className="p-3 bg-julia-blue-dark rounded-sm font-normal text-xl text-white">
            {props.company}
          </span>
          <span className="p-3 font-normal text-xl text-gray-800">
            {props.companyHelper}
          </span>
        </h3>
      </div>

      <div className="body">
        <div className="mt-[0.61rem]">
          <img
            src={props.image}
            className="w-full object-cover h-[200px] rounded-sm"
          />
        </div>
        <div className="content">
          <h4 className="text-xl font-semibold text-gray-800 my-5">
            {props.title}
          </h4>
          <p className="text-[19px] font-normal">{props.paragraph}</p>
        </div>
      </div>
    </a>
  );
}

export default CaseStudy;

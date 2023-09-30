function CaseStudy(props) {
  return (
    <a
      target="_blank"
      href={props.link}
      className="mb-8 border-b-[3px] border-julia-blue-light/10 hover:border-julia-blue-light p-2 pb-4"
    >
      {/* <div className="">
        <h3>
          <span className="p-3 bg-julia-blue-dark rounded-sm font-normal text-base text-white mb-5">
            {props.company}
          </span>
          <span className="p-3 font-normal text-base text-gray-800 hidden lg:inline-block">
            {props.companyHelper}
          </span>
        </h3>
      </div> */}

      <div className="body flex flex-col gap-y-0">
        <h3 className="mb-2 lg:mb-0 lg:mt-1">
          <span className="p-3 bg-julia-blue-dark rounded-sm font-normal text-base text-white">
            {props.company}
          </span>
          <span className="p-3 font-normal text-base text-gray-800 hidden lg:inline-block">
            {props.companyHelper}
          </span>
        </h3>

        <div className="">
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

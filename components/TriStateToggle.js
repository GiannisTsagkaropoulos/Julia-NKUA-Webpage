import classes from "./TriStateToggle.module.css";

const TriStateToggle = (props) => {
  return (
    <div className="flex items-center place-self-center w-96 mx-auto">
      <button
        id="MacOS"
        className={`overflow-hidden relative text-[#f4f4f4] bg-[#3e5294] px-8 py-3 rounded-l-2xl text-lg font-semibold  border-0 ${
          classes.btn
        } 
        ${
          props.currentOS === "MacOS"
            ? "bg-julia-blue-dark"
            : "bg-julia-blue-light"
        } `}
        onClick={props.onClick}
      >
        MacOS
      </button>
      <button
        id="Windows"
        className={`overflow-hidden relative text-[#f4f4f4] px-8 py-3 text-lg font-semibold border-0  ${
          classes.btn
        } ${
          props.currentOS === "Windows"
            ? "bg-julia-blue-dark"
            : "bg-julia-blue-light"
        } `}
        onClick={props.onClick}
      >
        Windows
      </button>
      <button
        id="Linux"
        className={`overflow-hidden relative text-[#f4f4f4] bg-[#3e5294] px-8 py-3 rounded-r-2xl text-lg font-semibold ${
          classes.btn
        }
        ${
          props.currentOS === "Linux"
            ? "bg-julia-blue-dark"
            : "bg-julia-blue-light"
        }`}
        onClick={props.onClick}
      >
        Linux
      </button>
    </div>
  );
};

export default TriStateToggle;

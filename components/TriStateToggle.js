import classes from "./TriStateToggle.module.css";

const TriStateToggle = (props) => {
  return (
    <div className="flex items-center place-self-center w-96 mx-auto">
      <div>
        <button
          id="MacOS"
          className={`overflow-hidden relative text-[#f4f4f4] bg-[#3e5294] px-8 py-3 rounded-l-2xl text-lg font-semibold  border-0 ${classes.btn}`}
          onClick={props.onClick}
        >
          MacOS
        </button>
      </div>
      <button
        id="Windows"
        className={`overflow-hidden relative text-[#f4f4f4] bg-[#3e5294] px-8 py-3 text-lg font-semibold border-0  ${classes.btn}`}
        onClick={props.onClick}
      >
        Windows
      </button>
      <button
        id="Linux"
        className={`overflow-hidden relative text-[#f4f4f4] bg-[#3e5294] px-8 py-3 rounded-r-2xl text-lg font-semibold ${classes.btn}`}
        onClick={props.onClick}
      >
        Linux
      </button>
    </div>
  );
};

export default TriStateToggle;

const TriStateToggle = (props) => {
  return (
    <div className="flex items-center bg-slate-300 w-72 mx-auto">
      <button
        id="MacOS"
        className="bg-green-300 w-24 h-6 rounded-full focus:outline-none transition-colors focus:bg-red-600 hover:bg-yellow-300"
        onClick={props.onClick}
      >
        MacOS
      </button>
      <button
        id="Windows"
        className="bg-green-600 w-24 h-6 rounded-full focus:outline-none transition-colors"
        onClick={props.onClick}
      >
        Windows
      </button>
      <button
        id="Linux"
        className="bg-red-300 w-24 h-6 rounded-full focus:outline-none transition-colors"
        onClick={props.onClick}
      >
        Linux
      </button>
    </div>
  );
};

export default TriStateToggle;

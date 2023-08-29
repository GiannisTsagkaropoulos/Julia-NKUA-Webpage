function SubmitButton({ disableButton }) {
  return (
    <button
      disabled={disableButton}
      type="submit"
      className={`w-max rounded-lg bg-julia-blue-light px-8 py-3 text-center text-base font-medium text-white  ${
        disableButton
          ? "opacity-75 focus:outline-none "
          : "transition duration-10 ease-in-out hover:scale-105 hover:bg-julia-blue-dark  focus:outline-slate-900"
      }`}
    >
      Submit
    </button>
  );
}

export default SubmitButton;

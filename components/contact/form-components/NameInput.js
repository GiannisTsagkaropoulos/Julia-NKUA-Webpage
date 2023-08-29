import NameFailure from "./NameFailure";
import InputMark from "./InputMark";

const NameInput = ({ name, text, isInitial, validation, setName }) => {
  const { nameIsInitial, isEmpty, isSmall, isBig, isOkay } = validation;

  const failure = (!isInitial || !nameIsInitial) && !isOkay;
  const success = (!isInitial || !nameIsInitial) && isOkay;

  return (
    <div className="relative">
      <input
        type="text"
        name={"name"}
        placeholder={text}
        value={name}
        onChange={(event) => setName(event.target.value)}
        className={`w-full rounded-md border-2 border-julia-blue-light/50  bg-transparent pt-2 pb-2 pl-2 pr-10 julia-blue-dark selection:bg-julia-blue-light focus:outline-none ${
          failure ? "border-julia-red-light " : null
        } 
      ${success ? "border-julia-green-light" : null} ${
          !failure && !success ? "focus:border-julia-blue-light" : null
        }`}
      />
      <div className="absolute top-0 right-0 h-full flex items-center pr-2">
        <InputMark failure={failure} success={success} />
      </div>
      <NameFailure
        isEmpty={isEmpty}
        isSmall={isSmall}
        isBig={isBig}
        failure={failure}
      />
    </div>
  );
};

export default NameInput;

import EmailFailure from "./EmailFailure";
import InputMark from "./InputMark";

const EmailInput = ({ email, text, setEmail, isInitial, validation }) => {
  const { emailIsInitial, isEmpty, containsAt, endsWithDotCom, isBig, isOkay } =
    validation;

  const failure = (!isInitial || !emailIsInitial) & !isOkay;
  const success = (!isInitial || !emailIsInitial) & isOkay;

  return (
    <div className="relative">
      <input
        type="text"
        name={"email"}
        placeholder={text}
        value={email.toLowerCase()}
        onChange={(event) => setEmail(event.target.value)}
        className={`w-full rounded-md border-2 border-julia-blue-light/50 bg-transparent pt-2 pb-2 pl-2 pr-10 julia-blue-dark selection:bg-julia-blue-light focus:outline-none text-gray-900 ${
          failure ? "border-julia-red-light" : null
        } ${success ? "border-julia-green-light" : null} ${
          !failure && !success ? "focus:border-julia-blue-light" : null
        }`}
      />
      <div className="absolute top-0 right-0 h-full flex items-center pr-2">
        <InputMark failure={failure} success={success} />
      </div>

      <EmailFailure
        isEmpty={isEmpty}
        containsAt={containsAt}
        endsWithDotCom={endsWithDotCom}
        isBig={isBig}
        failure={failure}
      />
    </div>
  );
};

export default EmailInput;

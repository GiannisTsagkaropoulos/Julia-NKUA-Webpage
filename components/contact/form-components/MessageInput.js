import TextAreaMark from "./TextAreaMark";

import MessageFailure from "./MessageFailure";

const MessageInput = ({ message, text, setMessage, isInitial, validation }) => {
  const { messageIsInitial, isEmpty, isSmall, isBig, isOkay } = validation;

  const failure = (!isInitial || !messageIsInitial) & !isOkay;
  const success = (!isInitial || !messageIsInitial) & isOkay;

  return (
    <div className="relative">
      <textarea
        name={"message"}
        placeholder={text}
        rows="10"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className={`w-full rounded-md border-2 border-julia-blue-light/50 bg-transparent pt-2 pb-2 pl-2 pr-10 julia-blue-dark selection:bg-julia-blue-light focus:outline-none ${
          failure
            ? "border-border-julia-red-light focus:border-julia-red-light"
            : null
        } ${
          success
            ? "border-julia-green-light focus:border-julia-green-light"
            : null
        } ${!failure && !success ? "focus:border-julia-blue-light" : null}`}
      />
      {/* <TextAreaMark failure={failure} success={success} /> */}
      <div className="absolute bottom-0 right-0 h-full flex items-center pr-2">
        <TextAreaMark failure={failure} success={success} />
      </div>
      <MessageFailure
        isEmpty={isEmpty}
        isSmall={isSmall}
        isBig={isBig}
        failure={failure}
      />
    </div>
  );
};

export default MessageInput;

function FetchMessage({ success, pending, isInitial }) {
  if (!isInitial) {
    if (pending) {
      return (
        <div className="py-3 font-medium text-bgDark-700 dark:text-white">
          Pending...
        </div>
      );
    }

    if (!pending && success) {
      return (
        <div className="py-3 font-medium text-julia-green-light">Success!</div>
      );
    }

    if (!pending && !success) {
      return (
        <div className="py-3 font-medium text-julia-red-light">
          Please try again!
        </div>
      );
    }
  }
}

export default FetchMessage;

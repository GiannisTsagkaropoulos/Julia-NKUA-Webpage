function EmailFailure({ isEmpty, containsAt, isBig, failure }) {
    var errorText = "";
  
    if (isEmpty) {
      errorText = "Email is empty";
    }
  
    if (!isEmpty && !containsAt) {
      errorText = 'Email does not contain "@" sign';
    }
  
    if (!isEmpty && isBig) {
      errorText = "Email is beyond character limit";
    }
  
    return failure ? (
      <div className="mt-2 text-sm text-failure-500">{errorText}</div>
    ) : null;
  }
  
  export default EmailFailure;
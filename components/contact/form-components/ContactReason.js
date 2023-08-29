const ContactReason = ({ reason, setReason }) => {
  return (
    <div className="flex items-center ">
      <label
        htmlFor="contact-reason"
        className="text-xl tracking-wide text-slate-800 font-medium mr-4"
      >
        Reason for contacting:{" "}
      </label>
      <select
        name="contact-reason"
        onChange={(e) => setReason(e.target.value)}
        className=" rounded-md border-2 border-julia-blue-light/50 bg-transparent py-10 pl-2 pr-10 julia-blue-dark selection:bg-julia-blue-light focus:outline-none text-gray-900 text-lg  focus:border-julia-blue-light"
      >
        <option value="bug" defaultValue>
          Bug
        </option>
        <option value="contribution">Contribution</option>
        <option value="instructions unclear">Instructions Unclear</option>
        <option value="other">Other...</option>
      </select>
    </div>
  );
};

export default ContactReason;

import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("bug");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!reason) {
      newErrors.reason = "Reason is required";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(event) {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = {
      name,
      reason,
      message,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log("result", result);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col align-middle w-2/6 mx-auto"
    >
      <div>
        <input
          type="text"
          id="name"
          className="bg-transparent border-2 my-2 border-julia-blue-light text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <input
          type="email"
          id="email"
          className="bg-transparent border-2 my-2 border-julia-blue-light text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="my-2">
        <label for="underline_select" class="sr-only">
          Underline select
        </label>
        <select
          id="underline_select"
          class="block py-2.5 px-0 w-full my-2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-julia-blue-light appearance-none focus:outline-none focus:ring-0 focus:border-julia-blue-dark peer"
          onChange={(e) => setReason(e.target.value)}
        >
          <option selected>Reason for contacting </option>
          <option value="bug">Bug</option>
          <option value="contribution">Contribution</option>
          <option value="instructions unclear">Instructions Unclear</option>
          <option value="other">Other...</option>
        </select>
        {errors.reason && <p className="error">{errors.reason}</p>}
      </div>
      <div>
        <textarea
          id="message"
          className="bg-transparent border-2 border-julia-blue-light text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Message"
          required
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <button className="mx-auto bg-julia-blue-dark opacity-80 px-8 py-2 my-2 rounded-lg text-white font-bold">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;

export const fetchData = async (name, email, reason, message) => {
  var success = false;
  // const formData = new FormData();

  // formData.append("name", name);
  // formData.append("email", email);
  // formData.append("message", message);

  const mailData = {
    name,
    email,
    reason,
    message,
  };

  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(mailData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  // console.log("fetch function", data);

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
};

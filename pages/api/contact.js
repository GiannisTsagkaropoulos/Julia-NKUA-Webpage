async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, reason, message } = req.body;
    var success = false;

    if (
      !email ||
      !email.includes("@") ||
      email.length > 320 ||
      !name ||
      name.trim() === "" ||
      name.length > 100 ||
      name.length < 2 ||
      !message ||
      message.trim() === "" ||
      message.length < 20
    ) {
      res.status(422).json({ message: "Invalid data." });
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("reason", reason);
    formData.append("message", message);

    // console.log("formData", formData);

    try {
      const response = await fetch(process.env.API_GETFORM_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const responseData = await response.json();
      // console.log("api", responseData);
      success = responseData.success;
      res.status(201).json({ message: responseData, success });
    } catch (error) {
      success = false;
      // console.log("api", error);
      res.status(500).json({ message: "Inserting data failed.", success });
    }
  }
}

export default handler;

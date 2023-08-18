import ContactForm from "@/components/contact/ContactForm";

function ContactPage() {
  return (
    <div className="grid list-none grid-cols-1 gap-10 place-items-center z-1 bg-blue-200 w-5/6 mx-auto">
      <p className="text-white text-4xl font-bold">
        🗳️Download instructions unclear?
      </p>
      <p className="text-white text-4xl font-bold">
        🙋‍♂️Need a helping hand getting started with Julia?
      </p>
      <p className="text-white text-4xl font-bold">
        💡Got ideas & want to contribute?
      </p>
      <p className="text-white text-4xl font-bold">
        🪲Found bugs in notebooks/website?
      </p>
      <p className="text-white text-4xl font-bold">👀Or something else?</p>
      <p className="text-gray-800 text-6xl font-extrabold text-center">
        We are more than willing <br />
        to help you
      </p>
      <ContactForm />
    </div>
  );
}

export default ContactPage;

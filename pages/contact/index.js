import ContactForm from "@/components/contact/form-components/ContactForm";

function ContactPage() {
  return (
    <div className="z-1">
      <section className="h-fit bg-[#c4d0fd]">
        <div className="h-12"></div>
        <div className="grid list-none grid-cols-1 gap-10 place-items-center w-5/6 mx-auto">
          <p className="text-white text-2xl lg:text-[2.5rem] font-bold text-center">
            🗳️Download/Getting started instructions unclear?
          </p>
          <p className="text-white text-2xl lg:text-[2.5rem] font-bold text-center">
            🙋‍♂️Need a helping hand learning Julia?
          </p>
          <p className="text-white text-2xl lg:text-[2.5rem] font-bold text-center">
            🪲Bugs in notebooks/website?
          </p>
          <p className="text-white text-2xl lg:text-[2.5rem] font-bold text-center">
            💡Got ideas to contribute?
          </p>
          <p className="text-white text-2xl lg:text-[2.5rem] font-bold text-center">
            👀Something else?
          </p>
        </div>
        <div className="h-12"></div>
        <p className="text-slate-800 text-3xl lg:text-6xl font-extrabold  text-center">
          We are more than willing to help you
        </p>
        <div className="lg:h-12"></div>
        {/* <ContactForm /> */}
        <div className="w-9/12 lg:w-5/12 mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;

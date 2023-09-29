import ContactForm from "@/components/contact/form-components/ContactForm";

import { Fragment } from "react";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Download/Getting started instructions unclear?
        Need a helping hand learning Julia?
        Bugs in notebooks/website?
        Got ideas to contribute?
        Something else?
        Contact the Julia Team NKUA and we will be glad to help you.
        "
        />
      </Head>
      <div className="z-1">
        <div className="h-16 2xl:h-[4.5rem]"></div>
        <section className="h-fit bg-[#c4d0fd]">
          <div className="h-12"></div>
          <div className="grid list-none grid-cols-1 gap-10 place-items-center w-5/6 mx-auto">
            <p className="text-white text-2xl lg:text-3xl font-bold text-center">
              🗳️Download/Getting started instructions unclear?
            </p>
            <p className="text-white text-2xl lg:text-3xl font-bold text-center">
              🙋‍♂️Need a helping hand learning Julia?
            </p>
            <p className="text-white text-2xl lg:text-3xl font-bold text-center">
              🪲Bugs in notebooks/website?
            </p>
            <p className="text-white text-2xl lg:text-3xl font-bold text-center">
              💡Got ideas to contribute?
            </p>
            <p className="text-white text-2xl lg:text-3xl font-bold text-center">
              👀Something else?
            </p>
          </div>
          <div className="h-12"></div>
          <p className="text-slate-800 text-3xl lg:text-5xl 2xl:text-6xl font-extrabold  text-center w-10/12 mx-auto">
            We are more than willing to help you
          </p>
          <div className="lg:h-10"></div>
          <div className="w-9/12 lg:w-5/12 mx-auto">
            <ContactForm />
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default ContactPage;

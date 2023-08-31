import Link from "next/link";

import classes from "../styles/404page.module.css";

function Custom404() {
  return (
    <section className="">
      <div className="h-28"></div>
      <div className="container ">
        <div
          className="h-[30rem] bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
            backgroundSize: "cover", // Set background-size to cover
          }}
        >
          <h1 className="text-3xl lg:text-6xl tracking-wide text-gray-700 font-extrabold mx-auto text-center w-[60%]">
            404
          </h1>
        </div>
        <div className="h-8"></div>
        <div>
          <h3 className="text-4xl lg:text-[80px] tracking-wide text-gray-700 font-extrabold mx-auto text-center my-4 w-[60%]">
            Look like you're lost
          </h3>
          <div className="h-6"></div>
          <p className="text-lg lg:text-2xl text-julia-blue-light opacity-70 tracking-wider font-medium w-[75%] mx-auto  text-justify lg:text-center">
            the page you are looking for not avaible!
          </p>
          <div className="h-4"></div>
          <Link href="/">
            <div className="w-max rounded-lg bg-julia-blue-light px-8 py-3 text-center text-base font-medium text-white mx-auto mb-8">
              Go to Home
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Custom404;

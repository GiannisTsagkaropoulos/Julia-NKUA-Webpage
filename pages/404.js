import Link from "next/link";

import classes from "../styles/404page.module.css";

function Custom404() {
  return (
    <section className="w-full">
      <div className="h-screen">
        <div className="h-[5rem]"></div>
        <h1 className="text-4xl lg:text-6xl tracking-wide text-gray-700 font-extrabold mx-auto text-center">
          404
        </h1>
        <div
          className="h-[15rem] md:h-[25rem] bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
            backgroundSize: "cover", // Set background-size to cover
          }}
        />
        <h3 className="text-3xl 2xl:text-[80px] tracking-wide text-gray-700 font-extrabold mx-auto text-center md:my-4">
          Look like you're lost
        </h3>
        <p className="text-lg lg:text-xl text-julia-blue-light opacity-70 tracking-wider font-medium mx-auto text-center">
          The page you are looking for not avaible!
        </p>
        <div className="h-4"></div>
        <Link href="/">
          <div className="w-max rounded-lg bg-julia-blue-light hover:bg-julia-blue-dark px-8 py-3 text-center text-base font-medium text-white mx-auto mb-8">
            Go to Home
          </div>
        </Link>
      </div>
      <div className="h-8"></div>
    </section>
  );
}

export default Custom404;

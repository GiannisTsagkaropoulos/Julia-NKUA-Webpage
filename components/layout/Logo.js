// function Logo() {
//   return (
//     <div className="text-white text-2xl font-bold">
//       Julia Team NKUA
//     </div>
//   );
// }

// export default Logo;

import React from "react";

const Logo = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Lilita+One&display=swap"
        rel="stylesheet"
      />
      <div
        className="text-white text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; "
        style={{ fontFamily: "Caprasimo, sans-serif" }}
      >
        <div className="flex flex-row items-center">
          <img
            src="images/favicon/ekpa_julia_logo.png"
            alt=""
            className="object-contain w-[3.5rem] lg:w-20"
          />
          <p className="text-2xl lg:text-4xl text-center">
            {" "}
            Julia Team <br /> NKUA
          </p>
        </div>
      </div>
    </>
  );
};

export default Logo;

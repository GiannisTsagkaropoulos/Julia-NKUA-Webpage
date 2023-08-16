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
        className="text-white text-3xl text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; "
        style={{ fontFamily: "Caprasimo, sans-serif" }}
      >
        <div className="flex flex-row items-center">
          <img
            src="images/favicon/ekpa_julia_logo.png"
            alt=""
            className="object-contain w-20"
          />
          <p className=" text-4xl text-center">
            {" "}
            Julia Team <br /> NKUA
          </p>
          {/* <div className="flex flex-column">
            <p className=" text-xl"> Julia Team </p>
            <p className=" text-xl"> NKUA</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Logo;

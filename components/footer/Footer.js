import FooterItem from "./FooterItem";
import { LinkedIn, Github } from "../../icons/icons";

import { useState, useEffect } from "react";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <section className="flex-none text-center py-1 bg-julia-blue-dark  w-full bottom-0">
      <div className="flex flex-wrap justify-center gap-3 mb-2">
        <FooterItem
          link={"https://www.linkedin.com/in/ioannis-tsagkaropoulos-85a280233/"}
        >
          <img
            src="/images/icons/linkedin.png"
            alt="linkedin-icon"
            className="w-6"
          />
        </FooterItem>
        <FooterItem link={"https://github.com/GiannisTsagkaropoulos"}>
          {/* <Github /> */}
          <img
            src="/images/icons/github.png"
            alt="github-icon"
            className="w-6"
          />
        </FooterItem>
      </div>
      <p className="text-xs text-white">
        &copy; {currentYear} Giannis Tsagkaropoulos. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;

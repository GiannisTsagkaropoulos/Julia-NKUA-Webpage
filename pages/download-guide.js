import { ReactMarkdown } from "react-markdown";
import TriStateToggle from "@/components/TriStateToggle";
import React, { Fragment, useState } from "react";
// import path from "path";

const osToMarkdownFile = {
  MacOS: "/content/Julia-installation-guide/MacOS.md",
  Windows: "/content/Julia-installation-guide/Windows.md",
  Linux: "/content/Julia-installation-guide/Linux.md",
};
export default function DownloadGuidePage(props) {
  const [currentOS, setCurrentOS] = useState("MacOS");

  function toggleSwitch(event) {
    const clickedOS = event.target.id;
    setCurrentOS(clickedOS);
  }
  //   const markdownFilePath = osToMarkdownFile[currentOS];
  //   console.log(markdownFilePath);
  //   const postsDirectory = path.join(
  //     process.cwd(),
  //     "content",
  //     "julia-download-guide",
  //     markdownFilePath
  //   );
  //   const file = await getPostData(currentOS);
  const markdownFilePath = osToMarkdownFile[currentOS];
  console.log(markdownFilePath);

  return (
    <Fragment>
      <div className="grid list-none grid-cols-1 gap-10 place-items-center bg-blue-100 mx-auto z-1 w-5/6">
        <h2 className="text-gray-500 text-4xl font-semibold">
          Julia programming
        </h2>
        <h3 className="text-gray-800 text-5xl font-extrabold">
          A fresh approach to <br />
          scientific computing
        </h3>
        <p className="text-gray-500 text-2xl font-semibold">
          The days of having julia pre-installed in your machine are not here
          (yet!)
        </p>
      </div>
      <TriStateToggle onClick={toggleSwitch} />
      {currentOS === "MacOS" && <p>Maccc</p>}
      {currentOS === "Windows" && <p>Windows</p>}
      {currentOS === "Linux" && <p>Linux</p>}
    </Fragment>
  );
}

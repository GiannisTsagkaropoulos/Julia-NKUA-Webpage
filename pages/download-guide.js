import TriStateToggle from "@/components/TriStateToggle";
import React, { Fragment, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect } from "react";

import { getDownloadGuidePosts } from "@/lib/mdUtils";

export default function DownloadGuidePage(props) {
  const allGuides = props.guides;

  const [currentOS, setCurrentOS] = useState("MacOS");

  const correspondingGuide = allGuides.find((obj) => obj.id === currentOS);
  const [currentDownloadGuide, setCurrentDownloadGuide] =
    useState(correspondingGuide);

  function toggleSwitch(event) {
    const clickedOS = event.target.id;
    setCurrentOS(clickedOS);
    const correspondingGuide = allGuides.find(
      (guide) => guide.id === clickedOS
    );
    setCurrentDownloadGuide(correspondingGuide);
  }

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
      <p>
        Julia Language Installation Depending on the device you are using,
        download the appropriate one version of Julia from page installations
        https://julialang.org/downloads/ on the official site.
      </p>
      <TriStateToggle onClick={toggleSwitch} />
      <ReactMarkdown>{currentDownloadGuide.content}</ReactMarkdown>
    </Fragment>
  );
}

export async function getStaticProps() {
  const allGuidePosts = await getDownloadGuidePosts();
  console.log(allGuidePosts);

  return {
    props: {
      guides: allGuidePosts,
    },
  };
}

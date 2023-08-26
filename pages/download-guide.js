import TriStateToggle from "@/components/TriStateToggle";
import React, { Fragment, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

import { getDownloadGuidePosts } from "@/lib/mdUtils";

export default function DownloadGuidePage(props) {
  const allGuides = props.guides;

  const { scrollYProgress } = useScroll();
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
      <>
        <motion.div
          className="fixed top-0 left-0 right-0 h-10 bg-red-500 transform overflow-scroll origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </>
      <div className="grid list-none grid-cols-1 gap-10 place-items-center bg-blue-100 mx-auto z-1 w-5/6">
        <h2 className="text-5xl text-gray-700 font-extrabold mx-auto text-center my-4">
          The days of having julia pre-installed in your machine are not here
          (yet!)
        </h2>
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

  return {
    props: {
      guides: allGuidePosts,
    },
  };
}

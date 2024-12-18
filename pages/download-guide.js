import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import Head from "next/head";
import React, { Fragment, useState } from "react";
import {
  coy,
  base16AteliersulphurpoolLight,
  coyWithoutShadows,
  materialLight,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
// import julia from "react-syntax-highlighter/dist/esm/languages/prism/julia";
// import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

// SyntaxHighlighter.registerLanguage("bash", bash);
// SyntaxHighlighter.registerLanguage("julia", julia);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

import TriStateToggle from "@/components/TriStateToggle";

import classes from "../styles/markdown.module.css";
import { getDownloadGuidePosts } from "@/lib/mdUtils";

export default function DownloadGuidePage(props) {
  const allGuides = props.guides;

  const [currentOS, setCurrentOS] = useState("MacOS");

  const [currentDownloadGuide, setCurrentDownloadGuide] = useState(
    allGuides.find((obj) => obj.id === currentOS)
  );

  function toggleSwitch(event) {
    const clickedOS = event.target.innerHTML; //.id;
    setCurrentOS(clickedOS);
    const correspondingGuide = allGuides.find(
      (guide) => guide.id === clickedOS
    );
    setCurrentDownloadGuide(correspondingGuide);
  }

  const customContent = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, "")}
          wrapLines={true}
          style={oneLight}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className="text-xl" {...props}>
          {children}
        </code>
      );
    },
  };
  // 0d0e0f
  return (
    <Fragment>
      <Head>
        <title>Download Guide</title>
        <meta
          name="description"
          content="Julia & IDE complete download guide for Mac, Windows, Linux."
        />
      </Head>
      <div className="z-1">
        <div className="h-16 2xl:h-[4.5rem]"></div>
        <section className="h-fit bg-[#ecf0fd]">
          <div className="h-12"></div>
          <h2 className="text-3xl lg:text-4xl 2xl:text-5xl text-julia-blue-dark font-extrabold mx-auto text-center my-4 tracking-wide w-10/12">
            The days of having julia pre-installed in your machine are not here
            (yet!)
          </h2>
          <div className="h-8"></div>
          <TriStateToggle onClick={toggleSwitch} currentOS={currentOS} />
          <div className="h-8"></div>
          <ReactMarkdown
            components={customContent}
            className={classes.markdown}
          >
            {currentDownloadGuide.content}
          </ReactMarkdown>
          <div className="h-8"></div>
          <div className="h-16 2xl:h-[4.5rem]"></div>
        </section>
      </div>
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

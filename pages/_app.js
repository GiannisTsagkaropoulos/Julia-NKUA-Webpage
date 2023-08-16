import Head from "next/head";
import Layout from "@/components/layout/Layout";

import "@/styles/globals.css";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Julia Team NKUA</title>
        <meta name="description" content="Giannis Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout />
      <div className="pt-28">
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

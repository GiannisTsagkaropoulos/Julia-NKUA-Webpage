import Head from "next/head";
import { Fragment } from "react";
import Layout from "@/components/layout/Layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Julia NKUA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout />
      <div>
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

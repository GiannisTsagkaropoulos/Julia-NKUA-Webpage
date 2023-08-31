import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/footer/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="icon" href="/images/favicon/ekpa_julia_logo.ico" /> */}
        <link rel="icon" href="/images/favicon/ekpa_julia_logo_border.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

      <Footer />
    </Html>
  );
}

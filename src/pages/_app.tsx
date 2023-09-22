import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Duurenbayar Portfolio</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default CustomApp;

import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import Theme from "@/theme/theme";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Theme>
        <Head>
          <title>Duurenbayar Portfolio</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Theme>
    </>
  );
};

export default CustomApp;

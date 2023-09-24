import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import Theme from "@/theme/theme";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <Head>
        <title>Duurenbayar Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Theme>
  );
};

export default CustomApp;

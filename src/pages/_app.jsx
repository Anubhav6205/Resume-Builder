import InfoProvider from "@/context/InfoProvider";
import "@/styles/index.scss";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Resumify</title>
        <link rel="icon" href="/tab.png" />
      </Head>
      <InfoProvider>
        <Component {...pageProps} />
      </InfoProvider>
    </>
  );
}

import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
         <title>Doodle Anizuki</title>
  <meta name="description" content="5555 Generated Doodle Anizuki. A Deriv Project for Upunks v2, Chib v3, Upunks Collections And Medals Holders"/>

  
  <meta property="og:url" content="https://doodleanizuki-mintingdapp.vercel.app/"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="Doodle Anizuki"/>
  <meta property="og:description" content="5555 Generated Doodle Anizuki. A Deriv Project for Upunks v2, Chib v3, Upunks Collections And Medals Holders"/>
  <meta property="og:image" content="https://i.ibb.co/z63qtqR/Untitled5-2022-08-03-15-36-20220805185754.png"/>


  <meta name="twitter:card" content="summary_large_image"/>
  <meta property="twitter:domain" content="doodleanizuki-mintingdapp.vercel.app"/>
  <meta property="twitter:url" content="https://doodleanizuki-mintingdapp.vercel.app/"/>
  <meta name="twitter:title" content="Doodle Anizuki"/>
  <meta name="twitter:description" content="5555 Generated Doodle Anizuki. A Deriv Project for Upunks v2, Chib v3, Upunks Collections And Medals Holders"/>
  <meta name="twitter:image" content="https://i.ibb.co/z63qtqR/Untitled5-2022-08-03-15-36-20220805185754.png"/>
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain="ethereum" clientId="ChainId.Rinkeby">
      <Head>
        <title>NFT Marketplace</title>
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>  
  )
}

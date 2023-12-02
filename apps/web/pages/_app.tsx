import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../store";
import theme from "../theme";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Chain, WagmiConfig, configureChains, createConfig } from "wagmi";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  goerli,
  sepolia,
  scrollTestnet,
  polygonZkEvmTestnet,
  baseGoerli,
  optimismSepolia,
  optimismGoerli,
  filecoin,
  bscTestnet,
  arbitrum,
  mainnet,
  optimism,
  polygon,
  arbitrumGoerli,
  arbitrumSepolia
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Path to your i18n initialization
import dotenv from "dotenv";

function ScrollToTop() {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return null;
}

const mantleTestnet: Chain = {
  id: 5001,
  name: "Mantle testnet",
  network: "MantleTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MNT ",
  },
  rpcUrls: {
    public: { http: ["https://rpc.testnet.mantle.xyz"] },
    default: { http: ["https://rpc.testnet.mantle.xyz"] },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.testnet.mantle.xyz" },
    etherscan: { name: "Explorer", url: "https://explorer.testnet.mantle.xyz" },
  },
  testnet: true,
};

const scrollSepoliaTestnet: Chain = {
  id: 534351,
  name: "Scroll Sepolia Testnet",
  network: "Scroll Sepolia Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH ",
  },
  rpcUrls: {
    public: { http: ["https://sepolia-rpc.scroll.io"] },
    default: { http: ["https://sepolia-rpc.scroll.io"] },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://sepolia.scrollscan.dev" },
    etherscan: { name: "Explorer", url: "https://sepolia.scrollscan.dev" },
  },
  testnet: true,
};


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    goerli,
    sepolia,
    optimismGoerli,
    optimismSepolia,
    arbitrumGoerli,
    arbitrumSepolia,
    scrollTestnet,
    scrollSepoliaTestnet,
    mantleTestnet,
    baseGoerli,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "WUW-WhatverYouWant RainbowKit App",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} coolMode={true}>
              <Layout>
                <ScrollToTop></ScrollToTop>
                <Component {...pageProps} />
              </Layout>
            </RainbowKitProvider>
          </WagmiConfig>
        </Provider>
      </ChakraProvider>
  );
}

export default MyApp;
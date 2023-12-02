import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="title"
            content="WUW - Whatever You Want - Telegram bot to trade, snipe web3 cryptos easily in 6 blockchains"
          />
          <meta
            name="description"
            content="WUW - Whatever You Want - Telegram bot to trade, snipe cryptos easily in 6 blockchains"
          />
          <meta
            name="keywords"
            content="WUW - Whatever You Want, Tool, Bot, Telegram, Web3, Trade, Portofolio, Wallet, Multi chains, Fast, Easy, Mobile"
          />
          <meta name="author" content="WUW - Whatever You Want" />
          <meta
            property="og:title"
            content="WUW - Whatever You Want - Social Network "
          />
          <meta
            property="og:description"
            content="Discuss, chat, Trade, Swap crypto, Manage your wallet, from Telegram, from anywhere."
          />
          <meta
            property="og:image"
            content="https://wuw-whateveryouwant.xyz/PepeFi.png"
          />
          <meta property="og:url" content="https://wuw-whateveryouwant.xyz" />
          <meta name="twitter:creator" content="@WUW_WhtevrUWant" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@WUW_WhtevrUWant" />
          <meta name="twitter:title" content="WUW_WhtevrUWant" />
          <meta name="twitter:description" content="WUW_WhtevrUWant" />
          <meta name="twitter:creator" content="@WUW_WhtevrUWant" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
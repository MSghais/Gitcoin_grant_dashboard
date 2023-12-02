import Head from "next/head";
import Script from "next/script";

interface IHeaderSEO {
  title?: string;
  description?: string;
  isWithTitle?:boolean;
}
const HeaderSEO = ({ title, isWithTitle, description, }: IHeaderSEO) => {
  return (
    <>
      {process.env.NODE_ENV == "production" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script id="google-analytics">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
          </Script>
        </>
      )}

      <Head>
        {/* {isWithTitle && 
        <title>{title ? title : "WUW WhateverYouWant is SocialFi and community tool to engage your audience with Web3 like Crypto and NFT"}</title>
        } */}
        <meta
          name="title"
          content="Dashboard Gitcoin grant. WUW analytics"
        />
        <meta
          name="description"
          content="Gitcoin grant donors for Projects made by WUW Whatever You Want"
        />
        <meta
          name="keywords"
          content="Gitcoin, dashboard,  grant donors, analytics, WUW."
        />
        <meta name="author" content="Gitcoin grant donors for Projects made by WUW Whatever You Want" />
        <meta
          property="og:title"
          content="Gitcoin grant donors for Projects made by WUW Whatever You Want"
        />
        <meta
          property="og:description"
          content="Gitcoin grant donors for Projects"
        />
        <meta
          property="og:image"
          content="https://wuw-whateveryouwant.xyz/WUW_logo.png"
        />
        <meta property="og:url" content="https://wuw-whateveryouwant.xyz" />
        <meta name="twitter:creator" content="@WUW_WhtevrUWant" />
        <meta name="twitter:card" content="Gitcoin grant donors for Projects made by WUW Whatever You Want" />
        <meta name="twitter:site" content="@WUW_WhtevrUWant" />
        <meta name="twitter:title" content="WUW_WhtevrUWant" />
        <meta name="twitter:description" content="WUW_WhtevrUWant" />
        <meta name="twitter:creator" content="@WUW_WhtevrUWant" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
    </>
  );
};

export default HeaderSEO;

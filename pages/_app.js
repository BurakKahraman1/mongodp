import React from 'react';
import '../styles/globals.css'

import Head from "next/head";
import Script from "next/script";
import {useEffect} from "react";
import {useRouter} from "next/router";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import {GTM_ID, pageview} from "../_services/gtm";
import siteMetaData from "../_services/siteMetaData";

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    useEffect(() => {
        router.events.on('routeChangeComplete', pageview)
        return () => {
            router.events.off('routeChangeComplete', pageview)
        }
    }, [router.events])
  return (

      <ApolloProvider client={client}>
          <section>
              <Head>
                  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                  <link rel="icon" href="/favicon.svg" />
                  <link rel="preconnect" href="https://V1MWROR4YL-dsn.algolia.net" crossOrigin="true"/>
                  <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
              </Head>
              <Script
                  id="gtag-base"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                      __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer', '${GTM_ID}');
                    `,
                  }}
              />
              <Component {...pageProps} mData={siteMetaData} />
          </section>
      </ApolloProvider>
  )
}

export default MyApp

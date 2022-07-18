import Document, { Html, Head, Main, NextScript } from 'next/document'
import {GTM_ID} from "../lib/gtm";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"  />
                </Head>
                <body>
                <noscript> <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /> </noscript>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
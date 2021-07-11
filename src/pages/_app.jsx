import Head from "next/head";
import { Fragment } from "react";

import "../styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-196323285-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-196323285-1');
            `,
          }}
        />

        <title>Ferny</title>

        {/* Google Fonts; Inter */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />

        {/* FontAwesome and Twemoji icons */}
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/ellekasai/twemoji-awesome@gh-pages/twemoji-awesome.css"
        />

        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Ferny | The browser for developers" />
        <meta
          name="description"
          content="Ferny streamlines your dev process by prioritizing developer-friendly software. Ferny is opensource and built with modern technology. Sign up in the waitlist to get early access to Ferny!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ferny.realzaidmukaddam.tech" />
        <meta
          property="og:title"
          content="Ferny | The browser for developers"
        />
        <meta
          property="og:description"
          content="Ferny streamlines your dev process by prioritizing developer-friendly software. Ferny is opensource and built with modern technology. Sign up in the waitlist to get early access to Ferny!"
        />
        <meta property="og:image" content="/favicon.ico" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ferny.realzaidmukaddam.tech" />
        <meta
          property="twitter:title"
          content="Ferny | The browser for developers"
        />
        <meta
          property="twitter:description"
          content="Ferny streamlines your dev process by prioritizing developer-friendly software. Ferny is opensource and built with modern technology. Sign up in the waitlist to get early access to Ferny!"
        />
        <meta property="twitter:image" content="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;

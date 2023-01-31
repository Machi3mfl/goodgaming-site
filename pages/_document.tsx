import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Press Start 2P&display=optional"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Play&display=optional"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Sofia Sans Extra Condensed&display=optional"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class ParlorsongsDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Online MIDI player piano - Noteriver</title>
          <link rel="icon" href="/favicon.svg" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700&display=swap"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

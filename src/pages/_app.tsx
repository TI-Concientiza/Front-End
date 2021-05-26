import { AppProps } from "next/app";
import "../styles/global.scss";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <React.Fragment>
        <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;

import * as React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <CSSReset />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;

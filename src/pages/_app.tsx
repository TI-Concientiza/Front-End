import * as React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import thema from "../utils/theme";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={thema}>
            <CSSReset />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;

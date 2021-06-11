import * as React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import thema from "../utils/theme";
import Menu from "../components/Menu";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={thema}>
            <CSSReset />
            <Menu />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;

import * as React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import thema from "../utils/theme";
import Menu from "../components/Menu";

import "../styles/global.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={thema}>
            <CSSReset />
            <Menu />
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;

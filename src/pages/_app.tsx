import * as React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import thema from "../utils/theme";

import "../styles/global.scss";
import "../styles/strong-text.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={thema}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;

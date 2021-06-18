import * as React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import thema from "../utils/theme";
import Menu from "../components/Menu";

<<<<<<< HEAD
import "../styles/global.css";
=======
import "../styles/global.scss";
import "../styles/strong-text.css";
>>>>>>> c1a1f63e34d68e8a905bdaf81afdb7becd78d409

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

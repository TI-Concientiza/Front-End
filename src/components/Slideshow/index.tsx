import React from "react";

import { Box, Image, Text } from "@chakra-ui/react";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow: React.FC = () => {
    return (
        <>
            <Box className="slide-container">
                <Fade>
                    <Box className="each-fade">
                        <Image
                            src="https://source.unsplash.com/collection/1728245"
                            width="100%"
                            height="300px"
                        />
                        <Text
                            position="absolute"
                            bottom="35px"
                            width="100%"
                            fontSize="30px"
                            color="primary.contrastText"
                            textAlign="center"
                            textShadow="0px 3px 6px #00000091"
                        >
                            Conheça o projeto
                        </Text>
                    </Box>
                    <Box className="each-fade">
                        <Image
                            src="https://source.unsplash.com/collection/1475356"
                            width="100%"
                            height="300px"
                        />
                        <Text
                            position="absolute"
                            bottom="35px"
                            width="100%"
                            fontSize="30px"
                            color="primary.contrastText"
                            textAlign="center"
                            textShadow="0px 3px 6px #00000091"
                        >
                            Adopt a Tree
                        </Text>
                    </Box>
                    <Box className="each-fade">
                        <Image
                            src="https://source.unsplash.com/collection/9639032"
                            width="100%"
                            height="300px"
                        />
                        <Text
                            position="absolute"
                            bottom="35px"
                            width="100%"
                            fontSize="30px"
                            color="primary.contrastText"
                            textAlign="center"
                            textShadow="0px 3px 6px #00000091"
                        >
                            Arborização
                        </Text>
                    </Box>
                </Fade>
            </Box>
        </>
    );
};

export default Slideshow;

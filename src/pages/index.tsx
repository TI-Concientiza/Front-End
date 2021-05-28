import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <Box
                width="100%"
                height="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
            >
                <Text
                    textAlign="center"
                    bgGradient="linear(to-l, #FF4F4F, #FFF)"
                    bgClip="text"
                    fontSize="50px"
                    fontWeight="extrabold"
                >
                    Hello Adopt a Tree
                </Text>
            </Box>
        </>
    );
}

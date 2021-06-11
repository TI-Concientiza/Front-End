/* eslint-disable react/prop-types */
import React from "react";
import {
    Box,
    Heading,
    Divider,
    Container as Wrapper,
    Center,
} from "@chakra-ui/react";
// import { Container } from './styles';

type IContainerProps = {
    title?: string;
};

const Container: React.FC<IContainerProps> = ({ children, title }) => {
    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            // bg="global.bg"
            bg="black"
        >
            {title && (
                <Wrapper mt={{ base: 10 }}>
                    <Divider orientation="horizontal" bg="grey" />
                    <Center h="column">
                        <Heading
                            as="h1"
                            fontSize={{ base: 20, lg: 30 }}
                            maxW={80}
                            textAlign="center"
                            mb={4}
                            fontWeight="bold"
                            color="secondary.contrastText"
                        >
                            {title}
                        </Heading>
                    </Center>
                </Wrapper>
            )}
            {children}
        </Box>
    );
};

export default Container;

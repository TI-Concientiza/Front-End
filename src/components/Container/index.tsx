/* eslint-disable react/prop-types */
import React from "react";
import {
    Box,
    Heading,
    Divider,
    Container as Wrapper,
    Center,
    ContainerProps,
} from "@chakra-ui/react";
// import { Container } from './styles';

type IContainerProps = {
    title?: string;
    container_props?: ContainerProps;
    background_default?: string;
};

const Container: React.FC<IContainerProps> = ({
    children,
    title,
    background_default,
    container_props,
}) => {
    return (
        <Box
            width="100%"
            height="auto"
            display="flex"
            alignItems="center"
            bg={background_default || "global.bg"}
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
            <Wrapper {...container_props} maxW="container.xl" centerContent>
                {children}
            </Wrapper>
        </Box>
    );
};

export default Container;

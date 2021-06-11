/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from "react";
import {
    Image,
    Center,
    Lorem,
    Flex,
    Text,
    VStack,
    Link,
    Collapse,
    useDisclosure,
    Box,
} from "@chakra-ui/react";
import { ArrowUpDownIcon } from "@chakra-ui/icons";
import { ICardBusinessProps } from "./ICardBusiness";
// import { Container } from './styles';

const ImageProfileWrapper = ({ img }) => {
    return (
        <Center
            w={270}
            h={270}
            overflow="hidden"
            bg="white"
            borderRadius="full"
            boxShadow="base"
            p={5}
            zIndex="10"
        >
            <Image boxSize="contain" src={img} />
        </Center>
    );
};

const CardBusiness: React.FC<ICardBusinessProps> = ({ emp_props }) => {
    const { description, name, profileImgURL } = emp_props;
    const { isOpen, onToggle } = useDisclosure();

    const TituloEmpresa = ({ title }) => {
        return (
            <VStack p="10px 0 15px" borderBottomRadius="md" bg="red">
                <Text fontWeight="bold" color="secondary.contrastText">
                    {title}
                </Text>
                <Center
                    pos="absolute"
                    bg="white"
                    bottom="-15px"
                    justifyContent="center"
                    alignItems="center"
                    border="2px solid rgba(24, 124, 255, 0.6)"
                    boxShadow="md"
                    // boxShadow="outline"
                    w={30}
                    h={30}
                    transition="background .25s"
                    _hover={{ textDecoration: "none", background: "#f3f3f3" }}
                >
                    <Link onClick={onToggle}>
                        <ArrowUpDownIcon color="blue" />
                    </Link>
                </Center>
            </VStack>
        );
    };
    return (
        <Flex
            pos="relative"
            direction="column"
            bg="white"
            borderTopRadius="50%"
            borderBottomRadius="3xl"
            boxShadow="xl"
        >
            <ImageProfileWrapper img={profileImgURL} />

            <TituloEmpresa title={name} />
            <Collapse in={isOpen} animateOpacity>
                <Box
                    p="40px"
                    color="white"
                    bg="teal.500"
                    rounded="md"
                    shadow="md"
                >
                    <Text>asdf</Text>
                </Box>
            </Collapse>
        </Flex>
    );
};

export default CardBusiness;

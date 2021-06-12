/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from "react";
import {
    Image,
    Center,
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
            w={280}
            h={280}
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
            <VStack p="10px 0" w="100%">
                <Text
                    fontWeight="bold"
                    fontSize="2xl"
                    color="secondary.contrastText"
                >
                    {title}
                </Text>
                <Center
                    pos="absolute"
                    bg="white"
                    bottom="-15px"
                    justifyContent="center"
                    alignItems="center"
                    border="2px solid rgba(24, 124, 255, 0.6)"
                    overflow="hidden"
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

    const CardCollapse = ({ des = "" }) => {
        return (
            <Box
                color="white"
                p="0 10px 20px"
                borderEndRadius="lg"
                shadow="md"
                h="auto"
            >
                <Text
                    fontSize="sm"
                    textAlign="center"
                    color="secondary.contrastText"
                    noOfLines={10}
                >
                    {des}
                </Text>
            </Box>
        );
    };

    return (
        <Flex
            pos="relative"
            direction="column"
            w="283px"
            bg="white"
            borderTopRadius="full"
            boxShadow="xl"
            alignItems="center"
        >
            <Box bg="white" borderTopRadius="full" w="full">
                <ImageProfileWrapper img={profileImgURL} />
            </Box>

            <TituloEmpresa title={name} />
            <Box width="100%">
                <Collapse in={isOpen} animateOpacity>
                    <CardCollapse des={description} />
                </Collapse>
            </Box>
        </Flex>
    );
};

export default CardBusiness;

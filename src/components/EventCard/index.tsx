import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";

import { MdHeadset, MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

export default function EventCard() {
    return (
        <Box
            w="300px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
        >
            <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src="https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                alt="avatar"
            />

            <Box py={4} px={6}>
                <chakra.h1
                    fontSize="xl"
                    fontWeight="bold"
                    color={useColorModeValue("gray.800", "white")}
                >
                    Arboriza PVH
                </chakra.h1>

                <chakra.p
                    py={2}
                    color={useColorModeValue("gray.700", "gray.400")}
                >
                    Plante hoje para amanhã colher
                </chakra.p>

                <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                >
                    <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

                    <chakra.h1 px={2} fontSize="sm">
                        TI CONCIENTIZA
                    </chakra.h1>
                </Flex>

                <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                >
                    <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                    <chakra.h1 px={2} fontSize="sm">
                        Porto Velho - RO
                    </chakra.h1>
                </Flex>
                <Flex
                    alignItems="center"
                    mt={4}
                    color={useColorModeValue("gray.700", "gray.200")}
                >
                    <Icon as={MdEmail} h={6} w={6} mr={2} />

                    <chakra.h1 px={2} fontSize="sm">
                        ticoncientiza@gmail.com
                    </chakra.h1>
                </Flex>
            </Box>
        </Box>
    );
}

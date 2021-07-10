import React from "react";
import { Flex, Box, Heading, Image } from "@chakra-ui/react";
import SidebarLayout from "../../../components/Sidebar";

const Register: React.FC = () => {
    return (
        <>
            <Box w="100%" minH="100vh">
                <Flex>
                    <Box pos="fixed" minH="100vh">
                        <SidebarLayout />
                    </Box>
                    <Box w="100%" p="20px" ml="150px">
                        <Box>
                            <Heading>Seus Registros</Heading>

                            <Flex justifyContent="center" mt="150px">
                                <Flex alignItems="center">
                                    <Image
                                        src="/img/registers/not-registers.svg"
                                        h="300px"
                                    />
                                    <Heading>Não há registros</Heading>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Register;

import React from "react";
import { Text, Flex, Box, Heading, Grid, Icon } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import SidebarLayout from "../../../components/Sidebar";

const Notifications: React.FC = () => {
    const dataCalendar = [
        {
            id: 1,
            local: "Espaço alternativo",
            date: "17/05 as 08:00",
        },
        {
            id: 2,
            local: "Av. Rio de Janeiro",
            date: "09/05 as 08:00",
        },
        {
            id: 3,
            local: "Av. Jose viera Caula",
            date: "09/05 as 08:00",
        },
        {
            id: 4,
            local: "Local a definir",
            date: "data e hora a definir",
        },
    ];

    const BoxEvent = () => {
        return (
            <>
                {dataCalendar.map((val) => {
                    return (
                        <>
                            <Flex mt="10px">
                                <Box>
                                    <Flex
                                        bg="#4D8EFF"
                                        w="80px"
                                        h="80px"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Icon
                                            as={FaCalendarAlt}
                                            w="40px"
                                            h="40px"
                                            color="#FFF"
                                        />
                                    </Flex>
                                </Box>
                                <Box ml="5px">
                                    <Text fontSize="18px" color="#2E577F">
                                        <strong>Novo Evento:</strong> Mutirao de
                                        plantio
                                    </Text>
                                    <Text fontSize="18px" color="#2E577F">
                                        - {val.local}
                                    </Text>
                                    <Text fontSize="18px" color="#2E577F">
                                        - {val.date}
                                    </Text>
                                </Box>
                            </Flex>
                        </>
                    );
                })}
            </>
        );
    };

    const BoxEventFinish = () => {
        return (
            <>
                {dataCalendar.map((val) => {
                    return (
                        <>
                            <Flex mt="10px">
                                <Box>
                                    <Flex
                                        bg="#FFC272"
                                        w="80px"
                                        h="80px"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Icon
                                            as={FaCalendarAlt}
                                            w="40px"
                                            h="40px"
                                            color="#FFF"
                                        />
                                    </Flex>
                                </Box>
                                <Box ml="5px">
                                    <Text fontSize="18px" color="#2E577F">
                                        <strong>Novo Evento:</strong> Mutirao de
                                        plantio
                                    </Text>
                                    <Text fontSize="18px" color="#2E577F">
                                        - {val.local}
                                    </Text>
                                    <Text fontSize="18px" color="#2E577F">
                                        - {val.date}
                                    </Text>
                                </Box>
                            </Flex>
                        </>
                    );
                })}
            </>
        );
    };

    return (
        <>
            <Box>
                <Flex w="100%" minH="100vh">
                    <Box pos="fixed" minH="100vh">
                        <SidebarLayout />
                    </Box>
                    <Box w="100%" p="20px" ml="150px">
                        <Box>
                            <Heading>Utimas notificacoes</Heading>
                            <Grid my="30px" gridTemplateColumns="1fr 1fr">
                                <Box>
                                    <BoxEvent />
                                </Box>
                                <Box>
                                    <BoxEventFinish />
                                </Box>
                            </Grid>
                        </Box>

                        <Box>
                            <Heading>Todas notificacoes</Heading>
                            <Grid mt="30px" gridTemplateColumns="1fr 1fr">
                                <Box>
                                    <BoxEvent />
                                </Box>
                                <Box>
                                    <BoxEventFinish />
                                </Box>
                            </Grid>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Notifications;

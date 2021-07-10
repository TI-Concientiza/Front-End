import React from "react";
import { Flex, Box, Grid, Heading } from "@chakra-ui/react";
import SidebarLayout from "../../../components/Sidebar";
import EventCard from "../../../components/EventCard";

const Adopt: React.FC = () => {
    return (
        <>
            <Box w="100%">
                <Flex>
                    <Box pos="fixed" minH="100vh">
                        <SidebarLayout />
                    </Box>
                    <Box w="100%" m="0 auto" p="20px" ml="150px">
                        <Box>
                            <Heading>Adotar</Heading>
                        </Box>

                        <Box mt="25px">
                            <Heading
                                fontSize="3xl"
                                fontWeight="normal"
                                mb="15px"
                            >
                                Próximos eventos
                            </Heading>

                            <Grid
                                gridTemplateColumns={{
                                    base: "",
                                    md: "repeat(2, 1fr)",
                                    xl: "repeat(4, 1fr)",
                                }}
                                gridGap={{ base: "20px" }}
                            >
                                <EventCard />
                                <EventCard />
                                <EventCard />
                                <EventCard />
                            </Grid>
                        </Box>

                        <Box mt="25px">
                            <Heading
                                fontSize="3xl"
                                fontWeight="normal"
                                mb="15px"
                            >
                                Eventos encerrados
                            </Heading>

                            <Grid
                                gridTemplateColumns={{
                                    base: "",
                                    md: "repeat(2, 1fr)",
                                    xl: "repeat(4, 1fr)",
                                }}
                                filter="opacity(60%)"
                            >
                                <EventCard />
                                <EventCard />
                                <EventCard />
                                <EventCard />
                            </Grid>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Adopt;

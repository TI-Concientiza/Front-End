import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import SidebarLayout from "../../../components/Sidebar";

const Notifications: React.FC = () => {
    return (
        <>
            <Flex>
                <SidebarLayout />
                <Flex
                    w="100%"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text>Notifications</Text>
                </Flex>
            </Flex>
        </>
    );
};

export default Notifications;

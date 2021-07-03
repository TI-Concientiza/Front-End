import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { MdHome, MdPerson, MdList, MdNotifications } from "react-icons/md";
import { SiGumtree } from "react-icons/si";
import { ImExit } from "react-icons/im";

export default function Sidebar() {
    const SidebarData = [
        {
            id: 1,
            title: "Home",
            icon: MdHome,
            href: "/dashboard",
        },
        {
            id: 2,
            title: "Perfil",
            icon: MdPerson,
            href: "https://www.youtube.com",
        },
        {
            id: 3,
            title: "Registros",
            icon: MdList,
            href: "/dashboard/registers",
        },
        {
            id: 4,
            title: "Notificações",
            icon: MdNotifications,
            href: "/dashboard/notifications",
        },
        {
            id: 5,
            title: "Adotar",
            icon: SiGumtree,
            href: "/dashboard/adopt",
        },
    ];

    const NavItem = () => {
        return (
            <>
                {SidebarData.map((val) => {
                    return (
                        <Box
                            role="group"
                            onClick={() => {
                                window.location.pathname = val.href;
                            }}
                        >
                            <Flex
                                flexDirection="column"
                                alignItems="center"
                                p="4"
                                rounded="md"
                                cursor="pointer"
                                color="#707070"
                                _hover={{
                                    bg: "rgba(80, 132, 201, 0.25)",
                                    color: "#1459B4",
                                }}
                                fontWeight="semibold"
                                transition=".15s ease"
                            >
                                <Icon m="0 2px" boxSize="40px" as={val.icon} />
                                {val.title}
                            </Flex>
                        </Box>
                    );
                })}
            </>
        );
    };

    const NavFooter = () => {
        return (
            <>
                <Box cursor="pointer" mb="10px" color="error.main">
                    <Flex alignItems="center" justifyContent="center">
                        <Text fontSize="20px" fontWeight="bold" mr="5px">
                            Sair
                        </Text>
                        <Icon as={ImExit} width="20px" height="20px" />
                    </Flex>
                </Box>
            </>
        );
    };

    return (
        <>
            <Flex
                as="nav"
                w="140px"
                minH="100vh"
                flexDirection="column"
                justifyContent="space-between"
                borderRight="1px solid black"
                p="4px"
            >
                <Box>
                    <NavItem />
                </Box>
                <NavFooter />
            </Flex>
        </>
    );
}
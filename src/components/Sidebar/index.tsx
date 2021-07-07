import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { MdHome, MdPerson, MdList, MdNotifications } from "react-icons/md";
import { SiGumtree } from "react-icons/si";
import { ImExit } from "react-icons/im";
import Link from "next/link";
import { IconType } from "react-icons/lib";

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
            href: "/dashboard/profile",
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

    // O link do next não suporta 2 filhos
    // Então você cria um container que no final fica 1 filho só
    const NavChildren = ({
        title,
        icon,
    }: {
        title: string;
        icon: IconType;
    }) => (
        <>
            <Icon m="0 2px" boxSize="40px" as={icon} />
            {title}
        </>
    );

    const NavItem = () => {
        return (
            <>
                {SidebarData.map((val) => {
                    return (
                        <Box
                            _notFirst={{
                                mt: "5px",
                            }}
                            _last={{
                                mb: "10px",
                            }}
                            onClick={() => {
                                window.location.pathname = val.href;
                            }}
                            key={String(val.id)}
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
                                <Link href={val.href}>
                                    <NavChildren
                                        icon={val.icon}
                                        title={val.title}
                                    />
                                </Link>
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
                p="4px 8px"
            >
                <Box borderBottom="3px solid #707070">
                    <NavItem />
                </Box>
                <NavFooter />
            </Flex>
        </>
    );
}

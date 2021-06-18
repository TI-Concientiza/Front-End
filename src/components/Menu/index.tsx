import React from "react";

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Image,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import DefaultButton from "../ButtonDefault";

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}
export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const NAV_ITEMS = React.useMemo<Array<NavItem>>(
        () => [
            {
                label: "Contatos",
                children: [
                    {
                        label: "Facebook",
                        subLabel: "Curta nosssa página no facebook",
                        href: "#",
                    },
                    {
                        label: "Instagram",
                        subLabel: "Siga-nos no instagram",
                        href: "#",
                    },
                    {
                        label: "Linkedin",
                        subLabel: "Siga-nos no Linkedin",
                        href: "#",
                    },
                ],
            },
            {
                label: "Como Contribuir",
                children: [
                    {
                        label: "Vakinha",
                        subLabel: "Doe anônimamente atráves da vakinha !",
                        href: "#",
                    },
                    {
                        label: "Adote !",
                        subLabel: "Adote uma ávore pela nossa plataforma !",
                        href: "#",
                    },
                    {
                        label: "Assinatura !",
                        href: "#",
                    },
                ],
            },
            {
                label: "Empresas que apoiam a ideia",
            },
        ],
        []
    );
    const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
        return (
            <Link
                href={href}
                role="group"
                display="block"
                p={2}
                rounded="md"
                _hover={{
                    bg: useColorModeValue(
                        "spotlight.dark",
                        "spotlight.hover_dark"
                    ),
                }}
            >
                <Stack direction="row" align="center">
                    <Box>
                        <Text
                            transition="all .3s ease"
                            _groupHover={{ color: "spotlight.main" }}
                            fontWeight={500}
                        >
                            {label}
                        </Text>
                        <Text fontSize="sm">{subLabel}</Text>
                    </Box>
                    <Flex
                        transition="all .3s ease"
                        transform="translateX(-10px)"
                        opacity={0}
                        _groupHover={{
                            opacity: "100%",
                            transform: "translateX(0)",
                        }}
                        justify="flex-end"
                        align="center"
                        flex={1}
                    >
                        <Icon
                            color="spotlight.main"
                            w={5}
                            h={5}
                            as={ChevronRightIcon}
                        />
                    </Flex>
                </Stack>
            </Link>
        );
    };

    const DesktopNav = () => {
        return (
            <Stack direction="row" spacing={4} alignItems="center">
                {NAV_ITEMS.map((navItem, i) => (
                    <Box
                        borderLeft={i > 0 ? "1px solid #707070" : "none"}
                        borderRight={
                            i === NAV_ITEMS.length - 1
                                ? "1px solid #707070"
                                : "none"
                        }
                        key={navItem.label}
                    >
                        <Popover trigger="hover" placement="bottom-start">
                            <PopoverTrigger>
                                <Link
                                    p={2}
                                    href={navItem.href ?? "#"}
                                    fontSize="sm"
                                    fontWeight="bold"
                                    color="#6E6E6E"
                                    _hover={{
                                        textDecoration: "none",
                                        color: "#AEAEAE",
                                    }}
                                >
                                    {navItem.label}
                                </Link>
                            </PopoverTrigger>

                            {navItem.children && (
                                <PopoverContent
                                    border={0}
                                    boxShadow="xl"
                                    bg="spotlight.dark"
                                    p={4}
                                    rounded="xl"
                                    minW="sm"
                                >
                                    <Stack>
                                        {navItem.children.map((child) => (
                                            <DesktopSubNav
                                                key={child.label}
                                                {...child}
                                            />
                                        ))}
                                    </Stack>
                                </PopoverContent>
                            )}
                        </Popover>
                    </Box>
                ))}
            </Stack>
        );
    };

    const MobileNavItem = ({ label, children, href }: NavItem) => {
        return (
            <Stack spacing={4} onClick={children && onToggle}>
                <Flex
                    py={2}
                    as={Link}
                    href={href ?? "#"}
                    justify="space-between"
                    align="center"
                    _hover={{
                        textDecoration: "none",
                    }}
                >
                    <Text
                        fontWeight={600}
                        color={useColorModeValue("gray.600", "gray.200")}
                    >
                        {label}
                    </Text>
                    {children && (
                        <Icon
                            as={ChevronDownIcon}
                            transition="all .25s ease-in-out"
                            transform={isOpen ? "rotate(180deg)" : ""}
                            w={6}
                            h={6}
                        />
                    )}
                </Flex>

                <Collapse
                    in={isOpen}
                    animateOpacity
                    style={{ marginTop: "0!important" }}
                >
                    <Stack
                        mt={2}
                        pl={4}
                        borderLeft={1}
                        borderStyle="solid"
                        borderColor={useColorModeValue("gray.200", "gray.700")}
                        align="start"
                    >
                        {children &&
                            children.map((child) => (
                                <Link
                                    key={child.label}
                                    py={2}
                                    href={child.href}
                                >
                                    {child.label}
                                </Link>
                            ))}
                    </Stack>
                </Collapse>
            </Stack>
        );
    };

    const MobileNav = () => {
        return (
            <Stack
                bg={useColorModeValue("white", "gray.800")}
                p={4}
                display={{ md: "none" }}
            >
                {NAV_ITEMS.map((navItem) => (
                    <MobileNavItem key={navItem.label} {...navItem} />
                ))}
            </Stack>
        );
    };

    return (
        <header>
            <Flex
                bg="global.bg"
                minH="60px"
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle="solid"
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align="center"
            >
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        bg="primary.dark"
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon
                                    color="primary.contrastText"
                                    w={5}
                                    h={5}
                                />
                            )
                        }
                        variant="ghost"
                        aria-label="Toggle Navigation"
                    />
                </Flex>
                <Flex justify={{ base: "center", md: "start" }}>
                    <Image src="/img/logo.png" alt="Logo" w="auto" maxH={55} />
                </Flex>

                <Stack
                    flex={{ base: 1, md: 1 }}
                    justify="flex-end"
                    direction="row"
                    spacing={6}
                >
                    <Flex display={{ base: "none", md: "flex" }} ml={10}>
                        <DesktopNav />
                    </Flex>
                    <Button
                        as="a"
                        fontSize="sm"
                        fontWeight={400}
                        variant="link"
                        href="#"
                        color="primary.dark"
                        display={{ base: "none", md: "flex" }}
                    >
                        <Text fontWeight="bold">Inscreva-se</Text>
                    </Button>
                    <DefaultButton
                        buttonProps={{
                            error: false,
                            title: "Entrar",
                            action: () => console.log("Entrando.."),
                        }}
                    />
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </header>
    );
}

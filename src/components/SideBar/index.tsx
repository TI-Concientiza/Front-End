import React from "react";
import { Flex, Text, VStack, Image, Link } from "@chakra-ui/react";


export default function SideBar() {
    return (
        <>
            <VStack boxShadow="2xl"
                width="200px"
                height="100vh"
                color="green"
                bg="white"
            >
                <Flex
                    justifyContent="space-around"
                    flexDirection="column"
                    alignItems="center"
                    height="100%"
                    flex="1"
                > 
                <Link href="http://localhost:3000" >
                    <Flex
                        alignItems="center"
                        flexDirection="column"
                        height="auto"
                        width="auto"
                        maxW="sm"
                        overflow="hidden"
                    >
                        <Image href="" width="40px" height="40px" src="/img/home.svg" />
                        <Text>Home</Text>
                    </Flex>
                </Link>
                <Link href="http://localhost:3000/user" >
                    <Flex
                        alignItems="center"
                        flexDirection="column"
                        height="auto"
                        width="auto"
                        maxW="sm"
                        overflow="hidden"
                    >
                        <Image
                            width="40px"
                            height="40px"
                            src="/img/user.svg"
                        ></Image>
                        <Text>Profile</Text>
                    </Flex>
                </Link>
                <Link href="http://localhost:3000/" >
                    <Flex
                        alignItems="center"
                        flexDirection="column"
                        height="auto"
                        width="auto"
                        maxW="sm"
                        overflow="hidden"
                    >
                        <Image
                            href=""
                            width="40px"
                            height="40px"
                            src="/img/list.svg"
                        ></Image>
                        <Text>Registros</Text>
                    </Flex>
                </Link>
                <Link href="http://localhost:3000/" >
                    <Flex
                        alignItems="center"
                        flexDirection="column"
                        height="auto"
                        width="auto"
                        maxW="sm"
                        overflow="hidden"
                    >
                        <Image
                            href=""
                            width="40px"
                            height="40px"
                            src="/img/bell.svg"
                        ></Image>
                        <Text>Notificações</Text>
                    </Flex>
                </Link>
                <Link href="http://localhost:3000/" >
                    <Flex
                        alignItems="center"
                        flexDirection="column"
                        height="auto"
                        width="auto"
                        maxW="sm"
                        overflow="hidden"
                    >
                        <Image
                            href=""
                            width="40px"
                            height="40px"
                            src="/img/lamp.svg"
                        ></Image>
                        <Text>Adotar</Text>
                    </Flex>
                </Link>
                <Link href="http://localhost:3000/" >
                    <Flex
                        alignItems="center"
                        flexDirection="column"
                        height="auto"
                        width="auto"
                        maxW="sm"
                        overflow="hidden"
                    >
                        <Image
                            href=""
                            width="40px"
                            height="40px"
                            src="/img/lamp.svg"
                        ></Image>
                        <Text>Sair</Text>
                    </Flex>
                </Link>
                </Flex>
            </VStack>
        </>
    );
}

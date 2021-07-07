/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Login() {
    const { push } = useRouter();

    const handleClickLogin = React.useCallback(() => {
        push("/dashboard");
    }, [push]);

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Flex
                minH="100vh"
                align="center"
                justify="center"
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                    <Stack align="center">
                        <NextLink href="/">
                            <Image
                                src="/img/logo.png"
                                width="auto"
                                height="100%"
                            />
                        </NextLink>
                        <Heading fontSize="3xl">Entre com sua conta</Heading>
                        <Text
                            fontSize="lg"
                            style={{
                                display: "flex",
                            }}
                            color="gray.600"
                        >
                            Ainda não possui uma conta?{" "}
                            <NextLink href="/register">
                                <Text
                                    style={{
                                        cursor: "pointer",
                                    }}
                                    ml="10px"
                                    color="blue.400"
                                >
                                    Criar conta 🌹
                                </Text>
                            </NextLink>
                        </Text>
                    </Stack>
                    <Box
                        rounded="lg"
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow="lg"
                        p={8}
                    >
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Endereço de e-mail</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Sua senha</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction="column"
                                    align="start"
                                    alignItems="center"
                                    justify="center"
                                >
                                    <Checkbox>Lembrar credênciais</Checkbox>
                                    <Link color="blue.400">
                                        Esqueceu sua senha?
                                    </Link>
                                </Stack>
                                <Button
                                    bg="blue.400"
                                    color="white"
                                    onClick={handleClickLogin}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                >
                                    Entrar
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}

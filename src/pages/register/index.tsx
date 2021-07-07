// eslint-disable-next-line react/react-in-jsx-scope
/* eslint-disable react/react-in-jsx-scope */
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

export default function Register() {
    const { push } = useRouter();
    return (
        <>
            <Head>
                <title>Registre-se gratuitamente !</title>
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
                        <Heading fontSize="3xl">Crie uma conta</Heading>
                        <Text
                            fontSize="lg"
                            style={{
                                display: "flex",
                            }}
                            color="gray.600"
                        >
                            Já possui uma conta?{" "}
                            <NextLink href="/register">
                                <Text
                                    style={{
                                        cursor: "pointer",
                                    }}
                                    ml="10px"
                                    color="blue.400"
                                >
                                    Entrar 🎉
                                </Text>
                            </NextLink>
                        </Text>
                    </Stack>
                    <Box
                        rounded="lg"
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow="lg"
                        p={8}
                        w={["auto", "lg"]}
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
                            <FormControl id="password">
                                <FormLabel>Confirme sua senha</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    bg="blue.400"
                                    color="white"
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    onClick={() => push("/dashboard")}
                                >
                                    Cadastrar
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}

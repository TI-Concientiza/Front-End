import React from "react";
import { Box, Button, Image, Text, Flex, Stack } from "@chakra-ui/react";
import { shade } from "polished";
import Container from "../components/Container";

const Home: React.FC = () => {
    const InfosForAdoptATree = React.useMemo(
        () => [
            {
                title: "Ajude a arborizar a sua cidade",
                img_url: "/icons/seeding-icon.svg",
            },
            {
                title: "Contribua para o seu planeta",
                img_url: "/icons/earth-icon.svg",
            },
            {
                title: "Ajude na qualidade de vida de sua cidade",
                img_url: "/icons/dumbbellsExercise-icon.svg",
            },
        ],
        []
    );

    return (
        <>
            <Box position="relative">
                <Box
                    background={{
                        base: "url('/img/homepage/banner-home.jpg') no-repeat bottom center / cover",
                    }}
                    height={["300px", "600px"]}
                >
                    <Box
                        width="100%"
                        position="absolute"
                        bottom="15px"
                        textAlign="center"
                        zIndex="1"
                    >
                        <Text
                            fontSize="3xl"
                            color="primary.contrastText"
                            fontWeight="bold"
                        >
                            Adopt a Tree
                        </Text>
                        <Button
                            bg="#016EC4"
                            p={{ base: 1, md: 3, xl: 6 }}
                            fontSize={{ base: "sm", md: "md", xl: "xl" }}
                            fontWeight="normal"
                            color="primary.contrastText"
                            rounded="full"
                            width={[150, 60]}
                            _hover={{
                                bg: shade(0.2, "#016EC4"),
                            }}
                        >
                            Adote uma árvore
                        </Button>
                    </Box>
                </Box>
                <Box
                    width="100%"
                    height={{ base: "150px", md: "350px", xl: "350px" }}
                    position="absolute"
                    bottom="0"
                    bgGradient="linear(to-b, transparent 35%, #000)"
                    opacity="50%"
                    zIndex="0"
                />
            </Box>
            <Container background_default="#22DC67">
                <Stack
                    direction={["column", "row"]}
                    spacing={["20px", "150px"]}
                    py={[10, 5]}
                >
                    {InfosForAdoptATree.map((element) => (
                        <Flex
                            width={{ base: "auto", md: "auto", xl: "200px" }}
                            flexDirection={{
                                base: "row",
                                md: "column",
                                xl: "column",
                            }}
                            alignItems="center"
                        >
                            <Image
                                width="auto"
                                height={{
                                    base: 20,
                                    md: "80px",
                                    xl: "80px",
                                }}
                                mr={{ base: 5, md: 0, xl: 0 }}
                                alt={element.title}
                                src={element.img_url}
                            />
                            <Text
                                textAlign="center"
                                fontSize={{ base: "sm", md: "md", xl: "xl" }}
                                fontWeight="bold"
                                color="primary.contrastText"
                            >
                                {element.title}
                            </Text>
                        </Flex>
                    ))}
                </Stack>
            </Container>

            <Container>
                <Flex
                    flexDirection={{ base: "column", md: "column", xl: "row" }}
                    width="100%"
                    px={10}
                    alignItems="center"
                    py={10}
                >
                    <Image
                        src="/img/homepage/nature-home.svg"
                        height={{ base: "150px", md: "350px", xl: "350px" }}
                        mr={{ base: 0, md: 0, xl: 5 }}
                        mb={{ base: 2, md: 2, xl: 0 }}
                    />
                    <Text
                        fontSize="lg"
                        color="secondary.contrastText"
                        textAlign="left"
                    >
                        No cenário mundial atual,{" "}
                        <strong className="bad nv1">
                            o aquecimento global
                        </strong>{" "}
                        é resultante principalmente da{" "}
                        <strong className="bad nv2">
                            intervenção do homem na natureza
                        </strong>
                        , ressaltando assim, a importância de aspectos
                        relacionados à ética, à moral e à cultura que permeiam a
                        sociedade. Igualmente como os problemas climáticos têm
                        aumentado nos últimos anos, a busca de conhecimento para
                        combater estes empecilhos também cresceu e fez com que
                        muitas pessoas começassem a se conscientizar,
                        despertando então, a vontade de buscar meios para
                        combater este impasse. Levando em conta que as árvores
                        <strong className="happy nv2">
                            {" "}
                            auxiliam na recuperação do meio ambiente
                        </strong>
                        , e que ainda, podem melhorar a qualidade de vida das
                        pessoas ao seu entorno, a procura por sementes e mudas
                        aumentou.
                    </Text>
                </Flex>

                <Flex
                    flexDirection={{
                        base: "column-reverse",
                        md: "column-reverse",
                        xl: "row",
                    }}
                    width="100%"
                    px={10}
                    alignItems="center"
                    py={10}
                >
                    <Text
                        fontSize="lg"
                        color="secondary.contrastText"
                        textAlign={{ base: "left", md: "left", xl: "right" }}
                    >
                        A ideia surge do fato de que existe um crescimento na
                        busca de um mundo
                        <strong className="happy nv2"> mais sustentável</strong>
                        , entretanto, nem todos têm os mesmos conhecimentos e
                        conseguem auxiliar de forma igual. O projeto foi criado
                        com o intuito não só de manter o meio ambiente, senão
                        que de melhorá-lo. Para conseguir tal objetivo, é
                        necessário algo que{" "}
                        <strong className="happy nv1">
                            combata a degradação do ambiente
                        </strong>{" "}
                        e uma organização de esforços individuais (por meio de
                        um aplicativo), em um trabalho de pessoas em conjunto,
                        ressaltando que toda ajuda é importante e pode impactar
                        de maneira mais efetiva no equilíbrio ambiental quando
                        se sabe canalizar o impacto que cada indivíduo possui.
                    </Text>
                    <Image
                        src="/img/homepage/forest-home.svg"
                        height={{ base: "150px", md: "350px", xl: "350px" }}
                        ml={{ base: 0, md: 0, xl: 5 }}
                        mb={{ base: 2, md: 2, xl: 0 }}
                    />
                </Flex>
            </Container>
        </>
    );
};

export default Home;

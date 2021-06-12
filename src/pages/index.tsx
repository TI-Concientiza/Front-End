import React from "react";
import { Box, Button, Image, Text, Flex } from "@chakra-ui/react";

import Menu from "../components/Menu";

const Home: React.FC = () => {
    return (
        <>
            <Box position="relative">
                <Box
                    background={{
                        base: "url('/img/homepage/banner-home.jpg') no-repeat center center / cover",
                        md: "url('/img/homepage/banner-home.jpg') no-repeat center center / 100% 100%",
                        xl: "url('/img/homepage/banner-home.jpg') no-repeat center center / 100% 100%",
                    }}
                    height={{ base: "150px", md: "350px", xl: "350px" }}
                >
                    <Box
                        width="100%"
                        position="absolute"
                        bottom="15px"
                        textAlign="center"
                        zIndex="1"
                    >
                        <Text
                            fontSize={{ base: "sm", md: "md", xl: "xl" }}
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

            <Flex
                flexDirection={{ base: "column", md: "row", xl: "row" }}
                alignItems={{ base: "center" }}
                width="100%"
                bg="#22DC67"
                justifyContent="space-evenly"
                px={{ base: 0, md: 0, xl: 10 }}
                py={5}
                position="relative"
            >
                <Flex
                    mb={{ base: 5, md: 0, xl: 0 }}
                    width={{ base: "auto", md: "auto", xl: "200px" }}
                    flexDirection={{ base: "row", md: "column", xl: "column" }}
                    alignItems="center"
                >
                    <Image
                        width={{ base: "30px", md: "80px", xl: "80px" }}
                        height={{ base: "30px", md: "80px", xl: "80px" }}
                        mr={{ base: 5, md: 0, xl: 0 }}
                        src="/icons/seeding-icon.svg"
                    />
                    <Text
                        textAlign="center"
                        fontSize={{ base: "sm", md: "md", xl: "xl" }}
                        fontWeight="bold"
                        color="primary.contrastText"
                    >
                        Ajude a arborizar a sua cidade
                    </Text>
                </Flex>

                <Flex
                    mb={{ base: 5, md: 0, xl: 0 }}
                    width="200px"
                    flexDirection={{ base: "row", md: "column", xl: "column" }}
                    alignItems="center"
                >
                    <Image
                        width={{ base: "30px", md: "80px", xl: "80px" }}
                        height={{ base: "30px", md: "80px", xl: "80px" }}
                        mr={{ base: 5, md: 0, xl: 0 }}
                        src="/icons/earth-icon.svg"
                    />
                    <Text
                        textAlign="center"
                        fontSize={{ base: "sm", md: "md", xl: "xl" }}
                        fontWeight="bold"
                        color="primary.contrastText"
                    >
                        Contribua para o seu planeta
                    </Text>
                </Flex>

                <Flex
                    width="200px"
                    flexDirection={{ base: "row", md: "column", xl: "column" }}
                    alignItems="center"
                >
                    <Image
                        width={{ base: "30px", md: "80px", xl: "80px" }}
                        height={{ base: "30px", md: "80px", xl: "80px" }}
                        mr={{ base: 5, md: 0, xl: 0 }}
                        src="/icons/dumbbellsExercise-icon.svg"
                    />
                    <Text
                        textAlign="center"
                        fontSize={{ base: "sm", md: "md", xl: "xl" }}
                        fontWeight="bold"
                        color="primary.contrastText"
                    >
                        Ajude na qualidade de vida de sua cidade
                    </Text>
                </Flex>

                <Box
                    width="100%"
                    height="100%"
                    position="absolute"
                    bottom="0"
                    bgGradient="linear(to-b, transparent)"
                />
            </Flex>

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
                    fontSize={{ base: "sm", md: "md", xl: "2xl" }}
                    textAlign="left"
                >
                    No cenário mundial atual, o aquecimento global é resultante
                    principalmente da intervenção do homem na natureza,
                    ressaltando assim, a importância de aspectos relacionados à
                    ética, à moral e à cultura que permeiam a sociedade.
                    Igualmente como os problemas climáticos têm aumentado nos
                    últimos anos, a busca de conhecimento para combater estes
                    empecilhos também cresceu e fez com que muitas pessoas
                    começassem a se conscientizar, despertando então, a vontade
                    de buscar meios para combater este impasse. Levando em conta
                    que as árvores auxiliam na recuperação do meio ambiente, e
                    que ainda, podem melhorar a qualidade de vida das pessoas ao
                    seu entorno, a procura por sementes e mudas aumentou.
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
                    fontSize={{ base: "sm", md: "md", xl: "2xl" }}
                    textAlign={{ base: "left", md: "left", xl: "right" }}
                >
                    A ideia surge do fato de que existe um crescimento na busca
                    de um mundo mais sustentável, entretanto, nem todos têm os
                    mesmos conhecimentos e conseguem auxiliar de forma igual. O
                    projeto foi criado com o intuito não só de manter o meio
                    ambiente, senão que de melhorá-lo. Para conseguir tal
                    objetivo, é necessário algo que combata a degradação do
                    ambiente e uma organização de esforços individuais (por meio
                    de um aplicativo), em um trabalho de pessoas em conjunto,
                    ressaltando que toda ajuda é importante e pode impactar de
                    maneira mais efetiva no equilíbrio ambiental quando se sabe
                    canalizar o impacto que cada indivíduo possui.
                </Text>
                <Image
                    src="/img/homepage/forest-home.svg"
                    height={{ base: "150px", md: "350px", xl: "350px" }}
                    ml={{ base: 0, md: 0, xl: 5 }}
                    mb={{ base: 2, md: 2, xl: 0 }}
                />
            </Flex>
        </>
    );
};

export default Home;

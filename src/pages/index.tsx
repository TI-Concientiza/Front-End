import React from "react";
import { Box, Button, Image, Text, Flex, Stack } from "@chakra-ui/react";
import { shade } from "polished";
import PillPity from "pill-pity";
import Link from "next/link";
import Container from "../components/Container";
import Menu from "../components/Menu";

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
            <Menu />
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
                            <Link href="/adote">Adote uma ??rvore</Link>
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
                            width={{
                                base: "auto",
                                md: "auto",
                                xl: "200px",
                            }}
                            flexDirection={{
                                base: "row",
                                md: "column",
                                xl: "column",
                            }}
                            alignItems="center"
                            key={element.title}
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
                                fontSize={{
                                    base: "sm",
                                    md: "md",
                                    xl: "xl",
                                }}
                                fontWeight="bold"
                                color="primary.contrastText"
                            >
                                {element.title}
                            </Text>
                        </Flex>
                    ))}
                </Stack>
            </Container>

            <PillPity
                pattern="leaf"
                patternFill="primary.main"
                patternOpacity={0.05}
            >
                <Box maxW="1200px" m="0 auto">
                    <Flex
                        flexDirection={{
                            base: "column",
                            md: "column",
                            xl: "row",
                        }}
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
                            No cen??rio mundial atual,{" "}
                            <strong className="bad nv1">
                                o aquecimento global
                            </strong>{" "}
                            ?? resultante principalmente da{" "}
                            <strong className="bad nv2">
                                interven????o do homem na natureza
                            </strong>
                            , ressaltando assim, a import??ncia de aspectos
                            relacionados ?? ??tica, ?? moral e ?? cultura que
                            permeiam a sociedade. Igualmente como os problemas
                            clim??ticos t??m aumentado nos ??ltimos anos, a busca
                            de conhecimento para combater estes empecilhos
                            tamb??m cresceu e fez com que muitas pessoas
                            come??assem a se conscientizar, despertando ent??o, a
                            vontade de buscar meios para combater este impasse.
                            Levando em conta que as ??rvores
                            <strong className="happy nv2">
                                {" "}
                                auxiliam na recupera????o do meio ambiente
                            </strong>
                            , e que ainda, podem melhorar a qualidade de vida
                            das pessoas ao seu entorno, a procura por sementes e
                            mudas aumentou.
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
                            textAlign={{
                                base: "left",
                                md: "left",
                                xl: "right",
                            }}
                        >
                            A ideia surge do fato de que existe um crescimento
                            na busca de um mundo
                            <strong className="happy nv2">
                                {" "}
                                mais sustent??vel
                            </strong>
                            , entretanto, nem todos t??m os mesmos conhecimentos
                            e conseguem auxiliar de forma igual. O projeto foi
                            criado com o intuito n??o s?? de manter o meio
                            ambiente, sen??o que de melhor??-lo. Para conseguir
                            tal objetivo, ?? necess??rio algo que{" "}
                            <strong className="happy nv1">
                                combata a degrada????o do ambiente
                            </strong>{" "}
                            e uma organiza????o de esfor??os individuais (por meio
                            de um aplicativo), em um trabalho de pessoas em
                            conjunto, ressaltando que toda ajuda ?? importante e
                            pode impactar de maneira mais efetiva no equil??brio
                            ambiental quando se sabe canalizar o impacto que
                            cada indiv??duo possui.
                        </Text>
                        <Image
                            src="/img/homepage/forest-home.svg"
                            height={{ base: "150px", md: "350px", xl: "350px" }}
                            ml={{ base: 0, md: 0, xl: 5 }}
                            mb={{ base: 2, md: 2, xl: 0 }}
                        />
                    </Flex>
                </Box>
            </PillPity>
        </>
    );
};

export default Home;

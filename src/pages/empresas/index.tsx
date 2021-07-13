import React from "react";
import { Text, Box, Stack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import Container from "../../components/Container";
import CardBusiness from "../../components/CardBusiness";
import BttonDefault from "../../components/ButtonDefault";
// import { Container } from './styles';

const Empresas: React.FC = () => {
    const { push } = useRouter();

    const empresa = [
        {
            id: 1,
            name: "Empresa teste",
            profileImgURL: "",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 2,
            name: "Empresa teste 2",
            profileImgURL: "",
            description: "",
        },
        {
            id: 3,
            name: "Empresa teste 3",
            profileImgURL: "",
            description: "",
        },
        {
            id: 4,
            name: "Empresa teste 4",
            profileImgURL: "",
            description: "",
        },
    ];

    const FooterTitle = () => {
        return (
            <VStack width="full" p={20}>
                <Box width="350px">
                    <Text
                        fontWeight="bold"
                        fontSize="xl"
                        textAlign="center"
                        color="secondary.contrastText"
                    >
                        Estas são as empresas que contribuem ativamente com a
                        ideia !
                    </Text>
                </Box>
                <Box marginTop="10px">
                    <BttonDefault
                        buttonProps={{
                            error: false,
                            title: "Apoiar",
                            action: () => push("/login"),
                        }}
                    />
                </Box>
            </VStack>
        );
    };

    return (
        <>
            <Menu />
            <Container title="Estas são as empresas que apoiam a ideia">
                <Stack direction={["column", "row"]} spacing="30px">
                    {empresa.map((el) => (
                        <CardBusiness
                            key={String(el.id)}
                            emp_props={{
                                description: empresa[0].description,
                                name: empresa[0].name,
                                profileImgURL: "/img/emps/logo-img.png",
                            }}
                        />
                    ))}
                </Stack>
            </Container>

            <FooterTitle />
        </>
    );
};

export default Empresas;

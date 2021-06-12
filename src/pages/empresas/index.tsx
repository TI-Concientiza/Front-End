import React from "react";
import {
    Text,
    Box,
    HStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from "@chakra-ui/react";
import Container from "../../components/Container";
import CardBusiness from "../../components/CardBusiness";
// import { Container } from './styles';

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

const Teste = () => (
    <Accordion allowToggle>
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Section 1 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Section 2 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
);

const empresas: React.FC = () => {
    return (
        <Container title="Veja as empresas que apoiam a ideia">
            <CardBusiness
                emp_props={{
                    description: empresa[0].description,
                    name: empresa[0].name,
                    profileImgURL: "/img/emps/logo-img.png",
                }}
            />
        </Container>
    );
};

export default empresas;

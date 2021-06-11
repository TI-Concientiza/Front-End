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
        description: "",
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
            <HStack spacing={{ base: 40 }}>
                {/* <Teste />
                <Teste /> */}
                {empresa.map((el) => (
                    <CardBusiness
                        key={el.id.toString()}
                        emp_props={{
                            description: el.description,
                            name: el.name,
                            profileImgURL: "/img/emps/logo-img.png",
                        }}
                    />
                ))}
            </HStack>
        </Container>
    );
};

export default empresas;

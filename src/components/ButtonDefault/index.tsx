/* eslint-disable react/prop-types */
import React from "react";
import { Button as ButtonChakra } from "@chakra-ui/react";
import IButtonProps from "./IButtonProps";
// import { Container } from './styles';

const Button: React.FC<IButtonProps> = ({ buttonProps }) => {
    const { title, action } = buttonProps;
    return (
        <ButtonChakra
            display={{ base: "none", md: "inline-flex" }}
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="primary.main"
            onClick={action}
            _hover={{
                bg: "primary.dark",
            }}
        >
            {title}
        </ButtonChakra>
    );
};

export default Button;

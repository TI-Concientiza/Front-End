import React, { useState } from "react";
import SideBar from '../components/SideBar/index';
import { Flex, Text, Input, FormControl, FormLabel, FormHelperText, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import Layout from '../components/Layout';


export default function User() {
    const [emailAddress, setEmailAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const isInvalid = password === "" || emailAddress === "";

    // Não precisa disso, pois vc já esta manipulando dentro do evneto 
    const handleSignIn = (event) => {

        console.log(event);
        // event.preventDefault();
    };


    const handleChangeInputName = (e) => {
        console.log(e.target.value);
        setFirstName(e.target.value);
    }


    const handlePost = async () => {
        const data = await fetch('http://google.com')

        console.log(data);
    }

    return (
        <Layout>
            <SideBar />  
            <section>
                <form method="POST" onSubmit={handleSignIn}>
                    <Text fontSize="3xl" >Informaçoes Pessoais</Text>
                <FormControl>
                    <FormLabel>Primeiro Nome: </FormLabel>
                        <Input required value={firstName} onChange={handleChangeInputName} />
                    <FormLabel>Ultimo Nome: </FormLabel>
                    <Input required value={lastName} />
                    <FormLabel>Email</FormLabel>
                    <Input required value={emailAddress} type="email" />
                        <FormHelperText>Nos nunca compartilharemos o seu email. ;)</FormHelperText>
                    <Button onClick={handlePost} type="submit">Submit</Button>
                        
                </FormControl>
                </form>
                    
                <form>
                    <Text fontSize="3xl" >Alterar Senha</Text>
                    <FormControl>
                        <FormLabel>Senha Atual</FormLabel>
                        <Input type="password" />
                        <FormLabel>Senha nova</FormLabel>
                        <Input type="password" />
                        <FormLabel>repetir senha nova</FormLabel>
                        <Input type="password" />
                        
                    </FormControl>
                </form>
                        
            </section>          
        </Layout>
    );
}


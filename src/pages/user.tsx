import React, { useState } from "react";
import SideBar from '../components/SideBar/index';
import { useFormik } from 'formik';
import { Flex, Text, Input, FormControl, FormLabel, FormHelperText, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import Layout from '../components/Layout';


export default function User() {
    const registerUser = async event => {
        event.preventDefault()
    
        const res = await fetch('/api/register', {
          body: JSON.stringify({
            name: event.target.name.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
    
        const result = await res.json()
        // result.user => 'Ada Lovelace'
      }
      return (
    <Layout>
        <SideBar />
        <section>
           <Flex align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="50vh"
      px={8}
      mb={16}>
            <form onSubmit={registerUser}>
                <Text fontSize="3xl" >Informaçoes Pessoais</Text>
                <FormControl>
                    <FormLabel>Primeiro Nome: </FormLabel>
                    <Input id="fname" name="fname" type="text" autoComplete="fname" required />
                    <FormLabel>Ultimo Nome: </FormLabel>
                    <Input id="lname" name="lname" type="text" autoComplete="lname" required />
                    <FormLabel>Email</FormLabel>
                    <Input id="email" name="email"  autoComplete="email" required type="email" />
                    <FormHelperText>Nos nunca compartilharemos o seu email. ;)</FormHelperText>
                    <Button type="submit">Submit</Button>
                        
                </FormControl>
            </form>
           </Flex>           
           <Flex align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      px={8}
      mb={16}>        
            <form>
                <Text fontSize="3xl" >Alterar Senha</Text>
                <FormControl>
                    <FormLabel>Senha Atual</FormLabel>
                    <Input id="password" name="password" autoComplete="password" required type="password" />
                    <FormLabel>Senha nova</FormLabel>
                    <Input id="npassword1" name="npassword1"  required type="password" />
                    <FormLabel>repetir senha nova</FormLabel>
                    <Input id="npassword2" name="npassword2"  required type="password" />
                    <Button type="submit">Submit</Button>   
                </FormControl>
            </form>
            </Flex>                
        </section>
    </Layout>
)}


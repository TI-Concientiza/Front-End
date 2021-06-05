import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function Layout({ children }) {
  const bgColor = '#f2f7fc';

  return (
    <Box bg={bgColor} minH="100vh">
      <Flex flexDir="row">
        {children}
      </Flex>
    </Box>
  );
}

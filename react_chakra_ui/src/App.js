import React from 'react';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import Cart from './Cart';
import Details from './Details';

/* 
    container = contains and centres 

    flex = flex component 

    vertical stack (part of the stack component) = stacks elements together and applies space between them

    spacing={3} = 12px / 0.75rem. 
    
    12 / 4 = 3. This is the 
    chakra way of naming the spacings
  */
function App() {
  return (
    <ChakraProvider>
      <Container maxWidth="container.xl">
        <Flex height="100vh" padding={5}>
          <Details />
          <Cart />
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;

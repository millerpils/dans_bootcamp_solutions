import { Box, Heading, Text, VStack } from '@chakra-ui/react';

function Cart() {
  return (
    <Box
      className="details"
      bg="gray.50"
      width="50%"
      height="full"
      ml={3}
      p={10}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>Some useful line about the customer's cart.</Text>
      </VStack>
    </Box>
  );
}

export default Cart;

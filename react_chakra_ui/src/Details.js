import {
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Select,
  Input,
  Checkbox,
  SimpleGrid,
  GridItem,
  Button,
} from '@chakra-ui/react';

function Details() {
  return (
    <VStack
      className="cart"
      spacing={3}
      width="50%"
      alignItems="flex-start"
      pt={10}
      mr={3}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to login.</Text>
      </VStack>

      <form>
        <SimpleGrid columns={2} columnGap={3} rowGap={5} width="full">
          <GridItem colSpan={1}>
            <FormControl id="firstName">
              <FormLabel>First name</FormLabel>
              <Input type="text" placeholder="John" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl id="lastName">
              <FormLabel>Last name</FormLabel>
              <Input type="text" placeholder="Doe" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl id="address">
              <FormLabel>Address</FormLabel>
              <Input type="text" placeholder="Address" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl id="city">
              <FormLabel>City</FormLabel>
              <Input type="text" placeholder="San Fran" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl id="country">
              <FormLabel>Country</FormLabel>
              <Select placeholder="Select option">
                <option value="uk">UK</option>
                <option value="usa">USA</option>
                <option value="sweden">Sweden</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl id="shipToBilling">
              <Checkbox defaultIsChecked>Ship to this billing address</Checkbox>
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl id="shipToBilling">
              <Button size="lg" width="full" colorScheme="blue">
                Place Order
              </Button>
            </FormControl>
          </GridItem>
        </SimpleGrid>
      </form>
    </VStack>
  );
}

export default Details;

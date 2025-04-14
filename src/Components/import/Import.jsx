import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  VStack,
  Container,
} from "@chakra-ui/react";
import { products } from "../Home/Banner/dataset";
const Import = () => {
  return (
    <React.Fragment>
      <Box bg="gray.50" py={10}>
        <Container maxW="7xl">
          <VStack spacing={4} mb={10} textAlign="center">
            <Heading>Welcome to Fibarn Logistics Solution</Heading>
            <Text fontSize="lg" color="gray.600">
              We export and import quality Nigerian goods and services with
              speed, safety, and excellence.
            </Text>
          </VStack>

          <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
            {products.map((product, index) => (
              <Box
                key={index}
                bg="white"
                boxShadow="md"
                borderRadius="lg"
                overflow="hidden"
                _hover={{ boxShadow: "xl" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  objectFit="cover"
                  h="200px"
                  w="100%"
                />
                <Box p={4}>
                  <Heading fontSize="xl">{product.name}</Heading>
                  <Text mt={2} fontSize="sm" color="gray.600">
                    {product.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Import;

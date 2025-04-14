import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  VStack,
  Container,
  Divider,
} from "@chakra-ui/react";
import { products } from "../Home/Banner/dataset";
const Import = () => {
  return (
    <React.Fragment>
      <Box bg="gray.50" py={10}>
        <Container maxW="8xl">
          <VStack spacing={6} mb={12} textAlign="center">
            <Heading size="2xl" color="blue.700">
              Welcome to Fibarn Logistics Solution
            </Heading>

            <Box bg="white" p={6} borderRadius="md" boxShadow="md" maxW="7xl">
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                At <b>Fibarn Logistics Solution</b>, we specialize in the
                seamless export and import of high-quality Nigerian goods and
                services. Our mission is to connect local producers to global
                markets, ensuring that the richness of Nigerian products such as
                dried fish, garri, beans, and vibrant Ankara fabrics are
                experienced worldwide. With a strong focus on{" "}
                <b>reliability, speed, and customer satisfaction</b>, we handle
                logistics, packaging, and documentation making the process
                hassle-free for our clients.
              </Text>

              <Divider my={6} borderColor="blue.300" />

              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                Whether you're a retailer looking to import authentic Nigerian
                products or a business seeking to export to international
                destinations, we provide tailored solutions that guarantee value
                and trust. We believe in promoting local industries, empowering
                entrepreneurs, and showcasing the best of Nigeria to the world.
                Join us as we <b>bridge borders, create opportunities,</b> and
                deliver excellence in every shipment.
              </Text>
            </Box>
          </VStack>

          <VStack spacing={4} mb={8} textAlign="center">
            <Heading size="lg" color="blue.600">
              Explore Our Products
            </Heading>
            <Text fontSize="md" color="gray.600">
              Here are some of the quality goods and services we import and
              export at Fibarn Logistics Solution.
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
                _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
                transition="all 0.3s ease"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  objectFit="cover"
                  h="200px"
                  w="100%"
                />
                <Box p={4}>
                  <Heading fontSize="xl" color="gray.800">
                    {product.name}
                  </Heading>
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

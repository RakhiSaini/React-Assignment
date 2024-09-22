import React from 'react';
import { ChakraProvider, Box, Heading, Button, Input, Card, CardBody } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading mb={4}>Welcome to Chakra UI</Heading>
        <Input placeholder="Enter something..." mb={4} />
        <Button colorScheme="blue" mb={4}>
          Click Me
        </Button>
        <Card>
          <CardBody>
            <Heading size="md">Chakra UI Card</Heading>
            <p>This is a simple card component showcasing Chakra UI.</p>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
};

export default App;

import { Box, Center, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function UpDown() {
  return (
    <Container bg="hsl(223, 19%, 93%)" borderRadius="10px" height="90px" width="20px">
      <Flex flexDir="column">
        <Box w="15px" h="30px" p="2px" pt="8px" alignSelf="center">
          <img src="../images/icon-plus.svg" alt="upvote" />
        </Box>
        <Center height="30px">
          <Text fontSize="sm" color="brand.moderateBlue">
            12
          </Text>
        </Center>
        <Box w="15px" h="30px" p="2px" pt="14px" alignSelf="center">
          <img src="../images/icon-minus.svg" alt="upvote" />
        </Box>
      </Flex>
    </Container>
  );
}

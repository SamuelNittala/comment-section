import React from 'react';
import { Center, Container, Flex, Text } from '@chakra-ui/react';
import UpDown from './UpDown';
import UserDetails from './UserDetails';

export default function CommentCard() {
  return (
    <Container maxW="1000px" mt="80px" bg="white" borderRadius="10px" py="8" px="4">
      <Flex color="red" flexDir="row">
        <Center w="80px">
          <UpDown />
        </Center>
        <Flex bgColor="blue" flexDir="column" flexGrow="2">
          <UserDetails />
          <Text> AFAFAFA FAFAFAF </Text>
        </Flex>
      </Flex>
    </Container>
  );
}

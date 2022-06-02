import React from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import UpDown from './UpDown/UpDown';
import UserDetails from './UserDetails';

export default function CommentCard() {
  return (
    <Box mt="4" bg="brand.white" borderRadius="10px" p="2" m="2">
      <Flex color="red" flexDir={['column-reverse', 'row']}>
        <Center alignSelf={['flex-start', 'center']} ml={['4', '0']}>
          <UpDown upCount={12} />
        </Center>
        <Flex flexDir="column" flexGrow="2" m="2" color="brand.grayishBlue">
          <UserDetails />
          <Text fontSize="16px" p="2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis accumsan neque,
            vitae accumsan odio bibendum a. Aliquam eu fringilla urna, non lacinia dolor. In eu quam
            consectetur, dapibus nulla et, bibendum nulla. Mauris gravida vitae nibh quis euismod.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function UserDetails() {
  return (
    <Flex>
      <Text fontSize="12px" mr="3" ml="1" p="2">
        {' '}
        User Image
      </Text>
      <Text fontSize="12px" mx="3" p="2">
        User Name
      </Text>
      <Text fontSize="12px" ml="3" mr="4" p="2">
        1month ago
      </Text>
      <Text fontSize="12px" ml="3" mr="4" p="2" justifyContent="flex-end">
        Reply
      </Text>
    </Flex>
  );
}

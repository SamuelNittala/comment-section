import { Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import EditDelete from './EditDelete';

export default function UserDetails({ youFlag = true }: any) {
  return (
    <Flex ml="2">
      <Image src="../images/avatars/image-amyrobson.png" alt="amyrobson" boxSize="30px" />
      <Text fontSize="12px" mx="3" p="1" color="black">
        amyrobson
      </Text>
      {youFlag && (
        <Text
          mt="1"
          fontSize="12px"
          h="fit-content"
          mx="3"
          px="2px"
          color="brand.white"
          bgColor="brand.moderateBlue"
        >
          you
        </Text>
      )}
      <Text fontSize="12px" ml="3" mr="4" p="1">
        1 month ago
      </Text>
      {youFlag ? (
        <EditDelete />
      ) : (
        <Text fontSize="12px" ml="3" mr="4" p="1" justifyContent="flex-end" color="brand.darkBlue">
          Reply
        </Text>
      )}
    </Flex>
  );
}

import { Text, HStack, Image } from '@chakra-ui/react';
import React from 'react';

export default function EditDelete() {
  return (
    <HStack spacing="25px" px="2" ml="auto" position={['absolute', 'sticky']} bottom="3" right="3">
      <HStack spacing="4px" _hover={{ cursor: 'pointer' }}>
        <Image src="../images/icon-delete.svg" alt="delete" boxSize="2" />
        <Text fontSize="12px" color="brand.softRed">
          Delete
        </Text>
      </HStack>
      <HStack spacing="4px" _hover={{ cursor: 'pointer' }}>
        <Image src="../images/icon-edit.svg" alt="delete" boxSize="2" />
        <Text fontSize="12px" color="brand.grayishBlue">
          Edit
        </Text>
      </HStack>
    </HStack>
  );
}

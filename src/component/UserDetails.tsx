import { Box, Flex, Spacer, Square, Text } from '@chakra-ui/react';
import React from 'react';

export default function UserDetails({ youFlag = true }: any) {
  return (
    <Flex>
      <Box pl="2">
        <img
          src="../images/avatars/image-amyrobson.png"
          alt="amyrobson"
          width="30px"
          height="30px"
        />
      </Box>
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
        <Flex justifyContent="flex-end" ml="auto">
          <Square size="1.5" mt="2.5">
            <img src="../images/icon-delete.svg" alt="delete" />
          </Square>
          <Text mt="1" fontSize="12px" h="fit-content" mx="2" color="brand.softRed">
            Delete
          </Text>
          <Spacer />
          <Square size="1.5" mt="2.5">
            <img src="../images/icon-edit.svg" alt="delete" />
          </Square>
          <Text mt="1" fontSize="12px" h="fit-content" mx="2" color="brand.moderateBlue">
            Edit
          </Text>
        </Flex>
      ) : (
        <Text fontSize="12px" ml="3" mr="4" p="1" justifyContent="flex-end" color="brand.darkBlue">
          Reply
        </Text>
      )}
    </Flex>
  );
}

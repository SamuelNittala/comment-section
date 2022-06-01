import { Text, Center, Stack } from '@chakra-ui/react';
import React from 'react';

export default function UpDown() {
  return (
    <Stack
      direction={['row', 'column']}
      spacing="15px"
      bgColor="brand.lightGray"
      borderRadius="10px"
    >
      <Center w="25px" h="25px">
        <img src="../images/icon-plus.svg" alt="upvote" />
      </Center>
      <Center w="25px" h="25px">
        <Text fontSize="sm" p="0" m="0" color="brand.moderateBlue">
          12
        </Text>
      </Center>
      <Center w="25px" h="25px">
        <img src="../images/icon-minus.svg" alt="upvote" />
      </Center>
    </Stack>
  );
}

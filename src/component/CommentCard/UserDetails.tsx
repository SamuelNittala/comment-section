import { Flex, Text, Image, HStack } from '@chakra-ui/react';
import React from 'react';
import EditDelete from './EditDelete';
import type { CommentType } from '../types';

type PropsType = {
  user: CommentType['user'];
  createdAt: CommentType['createdAt'];
  youFlag: boolean;
};

export default function UserDetails({ youFlag = false, user, createdAt }: PropsType) {
  return (
    <Flex ml="2">
      <Image src={user.image.png} alt="amyrobson" boxSize="30px" />
      <Text fontSize="12px" mx="3" p="1" color="black">
        {user.username}
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
        {createdAt}
      </Text>
      {youFlag ? (
        <EditDelete />
      ) : (
        <HStack
          spacing="4px"
          _hover={{ cursor: 'pointer' }}
          ml="auto"
          position={['relative', 'sticky']}
          bottom="3"
          right="6"
          left="auto"
        >
          <Image src="../images/icon-reply.svg" alt="reply" boxSize="2" />
          <Text fontSize="12px" color="brand.moderateBlue">
            Reply
          </Text>
        </HStack>
      )}
    </Flex>
  );
}

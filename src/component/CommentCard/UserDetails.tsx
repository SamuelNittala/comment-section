/* eslint-disable react/require-default-props */
import { Flex, Text, Image, HStack } from '@chakra-ui/react';
import React from 'react';
import EditDelete from './EditDelete';
import type { CommentType } from '../types';

type PropsType = {
  user: CommentType['user'];
  createdAt: CommentType['createdAt'];
  youFlag: boolean;
  commentId: CommentType['id'];
  replyFlag: boolean;
  parentCommentId?: number;
  setReplyClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UserDetails({
  user,
  createdAt,
  commentId,
  parentCommentId = -1,
  youFlag = true,
  setReplyClicked,
  replyFlag = false,
}: PropsType) {
  return (
    <Flex ml="2">
      <Image src={user.image.png} alt="amyrobson" boxSize="30px" />
      <Text fontSize="12px" mx="1" p="1" color="black">
        {user.username}
      </Text>
      {youFlag && (
        <Text
          mt="1"
          fontSize="12px"
          h="fit-content"
          mx="2"
          px="2px"
          color="brand.white"
          bgColor="brand.moderateBlue"
        >
          you
        </Text>
      )}
      <Text fontSize="12px" ml="1" mr="4" p="1">
        {createdAt}
      </Text>
      {youFlag ? (
        <EditDelete id={commentId} replyFlag={replyFlag} parentCommentId={parentCommentId} />
      ) : (
        <HStack
          spacing="4px"
          _hover={{ cursor: 'pointer' }}
          ml="auto"
          position={['absolute', 'sticky']}
          bottom="3"
          right="6"
          left="auto"
          onClick={() => setReplyClicked(true)}
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

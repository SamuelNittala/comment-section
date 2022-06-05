import React from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import UpDown from './UpDown/UpDown';
import UserDetails from './UserDetails';
import type { CommentCardPropsType } from './CommentCard.types';
import ReplyCard from './ReplyCard';

export default function CommentCard({ comment, currentUser }: CommentCardPropsType) {
  return (
    <Box mt="4" position={['relative', 'sticky']} w={['90%', '70%']}>
      <Flex
        color="red"
        flexDir={['column-reverse', 'row']}
        bg="brand.white"
        my="1"
        p="2"
        borderRadius="10px"
      >
        <Center alignSelf={['flex-start', 'center']} ml={['4', '0']}>
          <UpDown upCount={comment.score} />
        </Center>
        <Flex flexDir="column" flexGrow="2" m="2" color="brand.grayishBlue">
          <UserDetails
            user={comment.user}
            createdAt={comment.createdAt}
            commentId={comment.id}
            replyFlag={false}
            youFlag={currentUser.username === comment.user.username}
          />
          <Text fontSize="16px" p="2">
            {comment.content}
          </Text>
        </Flex>
      </Flex>
      {comment.replies?.map((reply) => (
        <ReplyCard key={reply.id} reply={reply} currentUser={currentUser} commentId={comment.id} />
      ))}
    </Box>
  );
}

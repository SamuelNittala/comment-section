import React from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import UpDown from './UpDown/UpDown';
import UserDetails from './UserDetails';
import type { ReplyCardPropsType } from './CommentCard.types';

export default function ReplyCard({ comment, currentUser }: ReplyCardPropsType) {
  return (
    <Box mt="4" position={['relative', 'sticky']} w={['90%', '85%']} ml="auto">
      <Flex
        color="red"
        flexDir={['column-reverse', 'row']}
        bg="brand.white"
        borderRadius="10px"
        p="2"
      >
        <Center alignSelf={['flex-start', 'center']} ml={['4', '0']}>
          <UpDown upCount={comment.score} />
        </Center>
        <Flex flexDir="column" flexGrow="2" m="2" color="brand.grayishBlue">
          <UserDetails
            user={comment.user}
            createdAt={comment.createdAt}
            commentId={comment.id}
            youFlag={currentUser.username === comment.user.username}
          />
          <Text fontSize="16px" p="2">
            {comment.content}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

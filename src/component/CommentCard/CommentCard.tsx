import React from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import UpDown from './UpDown/UpDown';
import UserDetails from './UserDetails';
import type { CommentCardPropsType } from './CommentCard.types';

export default function CommentCard({ comment, currentUser }: CommentCardPropsType) {
  return (
    <Box mt="4" bg="brand.white" borderRadius="10px" p="2" m="2" position={['relative', 'sticky']}>
      <Flex color="red" flexDir={['column-reverse', 'row']}>
        <Center alignSelf={['flex-start', 'center']} ml={['4', '0']}>
          <UpDown upCount={comment.score} />
        </Center>
        <Flex flexDir="column" flexGrow="2" m="2" color="brand.grayishBlue">
          <UserDetails
            user={comment.user}
            createdAt={comment.createdAt}
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

import React from 'react';
import { Box, Button, Center, Flex, Text, Textarea, VStack } from '@chakra-ui/react';
import UpDown from './UpDown/UpDown';
import UserDetails from './UserDetails';
import type { ReplyCardPropsType } from './CommentCard.types';
import useCommentStore from '../../store';

export default function ReplyCard({
  reply,
  currentUser,
  commentId,
  setReplyClicked,
}: ReplyCardPropsType) {
  const [editClicked, setEditClicked] = React.useState(false);
  const [editContent, setEditContent] = React.useState(reply.content);

  const updateReply = useCommentStore((state) => state.updateReply);

  const handleEditClick = () => {
    updateReply(commentId, reply.id, editContent);
    setEditClicked(false);
  };
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
          <UpDown upCount={reply.score} />
        </Center>
        <Flex flexDir="column" flexGrow="2" m="2" color="brand.grayishBlue">
          <UserDetails
            user={reply.user}
            createdAt={reply.createdAt}
            commentId={reply.id}
            replyFlag
            parentCommentId={commentId}
            youFlag={currentUser.username === reply.user.username}
            setReplyClicked={setReplyClicked}
            setEditClicked={setEditClicked}
          />
          {editClicked ? (
            <VStack>
              <Textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                p="10px"
                py="20px"
                m="2"
                wrap="soft"
              />
              <Button onClick={handleEditClick} colorScheme="blue">
                Update
              </Button>
            </VStack>
          ) : (
            <Text fontSize="16px" p="2">
              {reply.content}
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

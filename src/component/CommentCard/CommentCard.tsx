import React from 'react';
import { Box, Button, Center, Flex, Image, Text, Textarea } from '@chakra-ui/react';
import UpDown from './UpDown/UpDown';
import UserDetails from './UserDetails';
import type { CommentCardPropsType } from './CommentCard.types';
import ReplyCard from './ReplyCard';
import type { CommentType } from '../types';
import useCommentStore from '../../store';
import type { CommentState } from '../../store';

const DEFAULT_TEXT = 'Add a comment...';

export default function CommentCard({ comment, currentUser }: CommentCardPropsType) {
  const [replyClicked, setReplyClicked] = React.useState(false);
  const [replyContent, setReplyContent] = React.useState(DEFAULT_TEXT);

  const [editClicked, setEditClicked] = React.useState(false);
  const [editContent, setEditContent] = React.useState(comment.content);

  const addReply = useCommentStore((state: CommentState) => state.addReply);
  const handleFocus = () => {
    if (replyContent === DEFAULT_TEXT) setReplyContent('');
  };
  const handleSend = () => {
    const constructReply: Omit<CommentType, 'replies'> & {
      replyingTo: string;
    } = {
      content: replyContent,
      createdAt: 'Just Now',
      id: (comment.replies?.length || 0) + 1,
      replyingTo: comment.user.username,
      score: 0,
      user: currentUser,
    };
    addReply(comment.id, constructReply);
    setReplyClicked(false);
    setReplyContent(DEFAULT_TEXT);
  };
  return (
    <>
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
              setReplyClicked={setReplyClicked}
              setEditClicked={setEditClicked}
            />
            {editClicked ? (
              <Textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} />
            ) : (
              <Text fontSize="16px" p="2">
                {comment.content}
              </Text>
            )}
          </Flex>
        </Flex>
        {comment.replies?.map((reply) => (
          <ReplyCard
            key={reply.id}
            reply={reply}
            currentUser={currentUser}
            commentId={comment.id}
            setReplyClicked={setReplyClicked}
          />
        ))}
      </Box>
      {replyClicked && (
        <Flex
          position={['relative', 'sticky']}
          w={['90%', '70%']}
          bgColor="white"
          borderRadius="10px"
          mb="4"
        >
          <Image src={currentUser.image.png} alt="amyrobson" boxSize="40px" m="2" mt="4" />
          <Textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            fontSize="14px"
            onFocus={handleFocus}
            m="2"
            w={['95%', '97%']}
            h="100px"
            p="4"
          />
          <Button m="2" mt="4" mr="4" colorScheme="blue" size="md" onClick={handleSend}>
            Send
          </Button>
        </Flex>
      )}
    </>
  );
}

import { VStack } from '@chakra-ui/react';
import React from 'react';
import type { CommentState } from '../store';
import useCommentStore from '../store';
import CommentCard from './CommentCard/CommentCard';

export default function CommentList() {
  const comments = useCommentStore((state: CommentState) => state.comments);
  const currentUser = useCommentStore((state: CommentState) => state.currentUser);
  return (
    <VStack mt="10">
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} currentUser={currentUser} />
      ))}
    </VStack>
  );
}

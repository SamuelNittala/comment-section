/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { Text, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import type { CommentState } from '../../store';
import useCommentStore from '../../store';

type PropsType = {
  id: number;
  replyFlag?: boolean;
  parentCommentId?: number;
  setEditClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EditDelete({
  id,
  replyFlag = false,
  parentCommentId = -1,
  setEditClicked,
}: PropsType) {
  const deleteComment = useCommentStore((state: CommentState) => state.removeComment);
  const deleteReply = useCommentStore((state: CommentState) => state.removeReply);
  const handleDelete = () => {
    if (replyFlag) {
      deleteReply(parentCommentId, id);
    } else {
      deleteComment(id);
    }
  };
  return (
    <HStack
      spacing="25px"
      px="2"
      ml="auto"
      position={['absolute', 'sticky']}
      bottom="3"
      right="6"
      left="auto"
    >
      <HStack spacing="4px" _hover={{ cursor: 'pointer' }} onClick={handleDelete}>
        <Image src="../images/icon-delete.svg" alt="delete" boxSize="2" />
        <Text fontSize="12px" color="brand.softRed">
          Delete
        </Text>
      </HStack>
      <HStack spacing="4px" _hover={{ cursor: 'pointer' }} onClick={() => setEditClicked(true)}>
        <Image src="../images/icon-edit.svg" alt="delete" boxSize="2" />
        <Text fontSize="12px" color="brand.grayishBlue">
          Edit
        </Text>
      </HStack>
    </HStack>
  );
}

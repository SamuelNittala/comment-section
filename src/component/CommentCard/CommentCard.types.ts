import type React from 'react';
import type { CommentType, CurrentUserType } from '../types';

export type CommentCardPropsType = {
  comment: CommentType;
  currentUser: CurrentUserType;
  key: number;
  replies: CommentType['replies'];
};

export type ReplyCardPropsType = Omit<CommentCardPropsType, 'replies' | 'comment'> & {
  reply: Omit<CommentType, 'replies'>;
  commentId: number;
  setReplyClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

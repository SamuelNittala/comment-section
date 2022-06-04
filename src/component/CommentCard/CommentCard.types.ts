import type { CommentType, CurrentUserType } from '../types';

export type CommentCardPropsType = {
  comment: CommentType;
  currentUser: CurrentUserType;
  key: number;
  replies?: CommentType['replies'];
};

export type ReplyCardPropsType = Exclude<CommentCardPropsType, 'replies'>;

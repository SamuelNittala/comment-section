import type { CommentType, CurrentUserType } from '../types';

export type CommentCardPropsType = {
  comment: CommentType;
  currentUser: CurrentUserType;
  key: number;
};

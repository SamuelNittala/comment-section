import create from 'zustand';
import commentsData from '../public/fixtures/data.json';
import type { CommentType, CurrentUserType } from './component/types';

export type CommentState = {
  comments: Array<CommentType>;
  currentUser: CurrentUserType;
  // eslint-disable-next-line no-unused-vars
  removeComment: (id: number) => void;
};

const useCommentStore = create<CommentState>((set) => ({
  comments: commentsData.comments,
  currentUser: commentsData.currentUser,
  removeComment: (id: number) => {
    set((state) => ({
      ...state,
      comments: state.comments.filter((comment) => comment.id !== id),
    }));
  },
}));

export default useCommentStore;

/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import commentsData from '../public/fixtures/data.json';
import type { CommentType, CurrentUserType } from './component/types';

export type CommentState = {
  comments: Array<CommentType>;
  currentUser: CurrentUserType;
  removeComment: (id: number) => void;
  removeReply: (commentId: number, replyId: number) => void;
  addReply: (
    commentId: number,
    reply: Omit<CommentType, 'replies'> & {
      replyingTo: string;
    },
  ) => void;
};

const useCommentStore = create<CommentState>()(
  immer<CommentState>((set) => ({
    comments: commentsData.comments,
    currentUser: commentsData.currentUser,
    removeComment: (id: number) => {
      set((state: CommentState) => ({
        ...state,
        comments: state.comments.filter((comment) => comment.id !== id),
      }));
    },
    removeReply: (commentId: number, replyId: number) => {
      set((state: CommentState) => {
        const commentIndex = state.comments.findIndex((comment) => comment.id === commentId);
        state.comments[commentIndex].replies = state.comments[commentIndex].replies?.filter(
          (reply) => reply.id !== replyId,
        );
      });
    },
    addReply: (
      commentId: number,
      reply: Omit<CommentType, 'replies'> & {
        replyingTo: string;
      },
    ) => {
      set((state: CommentState) => {
        const commentIndex = state.comments.findIndex((comment) => comment.id === commentId);
        state.comments[commentIndex].replies?.push(reply);
      });
    },
  })),
);

export default useCommentStore;

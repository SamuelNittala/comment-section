export type CommentType = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: Array<
    Omit<CommentType, 'replies'> & {
      replyingTo: string;
    }
  >;
};

export type CurrentUserType = Pick<CommentType, 'user'>['user'];

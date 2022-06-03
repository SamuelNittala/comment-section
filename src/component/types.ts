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
  replies?: CommentType[];
};

export type CurrentUserType = Pick<CommentType, 'user'>['user'];

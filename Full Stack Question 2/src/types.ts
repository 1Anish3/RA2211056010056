export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  postCount: number;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  image: string;
  commentCount: number;
  createdAt: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  postId: string;
  createdAt: string;
}
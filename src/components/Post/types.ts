import { ReactNode } from 'react';

export type Props = {
  id: number;
  username: string;
  createdAt: Date;
  likes: number;
  content: string;
  own?: boolean;
  replies?: Props[];
};

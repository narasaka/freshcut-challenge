import { IconType } from "react-icons";

export interface User {
  username: string;
  profilePictureUrl: string;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  likes: number;
  isLiked: boolean;
  date: Date;
  replies?: Comment[];
}

export interface Social {
  id: string;
  url: string;
  icon: JSX.Element;
}

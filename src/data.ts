import { Comment } from "./types";

export const commentData: Comment[] = [
  {
    id: "1",
    user: { username: "uhSnow", profilePictureUrl: "/randompfp_1.png" },
    content: "I remember when this first dropped!",
    likes: 11,
    isLiked: false,
    date: new Date("07/06/2022"),
  },
  {
    id: "2",
    user: {
      username: "dragon_sphere_z",
      profilePictureUrl: "/randompfp_2.png",
    },
    content: "sicc",
    likes: 4,
    isLiked: true,
    date: new Date("07/07/2022"),
  },
  {
    id: "3",
    user: { username: "tomdog", profilePictureUrl: "/randompfp_3.png" },
    content: "huhhhh",
    likes: 0,
    isLiked: false,
    date: new Date("07/08/2022"),
  },
];

export const videoProfileData = [
  {
    title: "Aceu 1v6",
    url: "https://clips-media-assets2.twitch.tv/AT-cm%7CjuHoJMSAMCempC3YakQc7w.mp4",
    id: 1,
    shares: 100,
    likes: 145,
    isLiked: false,
  },
  {
    title: "No Scope Finishhhh",
    url: "https://clips-media-assets2.twitch.tv/AT-cm%7CW8wWX28-AQ5YIR206ZfmoQ.mp4",
    id: 2,
    shares: 303,
    likes: 120,
    isLiked: true,
  },
  {
    title: "aceu has fun with doors",
    url: "https://clips-media-assets2.twitch.tv/AT-cm%7CcfKvF9jFqZwbF8CKzeVpMg.mp4",
    id: 3,
    shares: 500,
    likes: 450,
    isLiked: false,
  },
];

import { ComponentPropsWithoutRef, useState } from "react";
import { User, Comment } from "../../types";
import UserProfilePicture from "../user/UserProfilePicture";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { getDayDiff } from "../../lib/utils";

interface VideoCommentProps extends ComponentPropsWithoutRef<"div"> {
  user: User;
  content: string;
  likes: number;
  isLiked: boolean;
  date: Date;
  replies?: Comment[];
}

const VideoComment: React.FC<VideoCommentProps> = ({
  user,
  content,
  likes,
  isLiked,
  date,
}) => {
  const [totalLikes, setTotalLikes] = useState(likes);
  const [_isLiked, setIsLiked] = useState(isLiked);
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <div>
          <UserProfilePicture
            url={user.profilePictureUrl}
            className="w-8 h-8"
          />
        </div>
        <div>
          <div className="font-semibold">{user.username}</div>
          <div className="text-gray-500">{content}</div>
          <div className="mt-2 flex gap-4">
            <div className="text-gray-500">{`${
              getDayDiff(new Date(), date) === 0
                ? "Just now"
                : `${getDayDiff(new Date(), date)}d`
            }`}</div>
            <button className="font-bold">Reply</button>
          </div>
        </div>
        <div className="ml-auto flex flex-col items-center">
          <div
            onClick={() => {
              setTotalLikes((total) => total + (_isLiked ? -1 : 1));
              setIsLiked((state) => !state);
            }}
          >
            {_isLiked ? (
              <BsHeartFill size={22} color={"white"} />
            ) : (
              <BsHeart size={22} color={"white"} />
            )}
          </div>
          <div className="text-xs">{totalLikes}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoComment;

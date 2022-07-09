import { ComponentPropsWithoutRef } from "react";
import { User } from "../../types";
import Checkmark from "../user/Checkmark";
import UserProfilePicture from "../user/UserProfilePicture";

interface VideoCaptionProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  user: User;
}

const VideoCaption: React.FC<VideoCaptionProps> = ({ user, title }) => {
  return (
    <div className="bg-neutral-900 border-b border-neutral-800 p-4 flex gap-4">
      <UserProfilePicture url="" className="w-12 h-12" />
      <div>
        <div className="font-semibold flex gap-1 items-center">
          <div>{user.username}</div>
          <Checkmark className="w-4 h-4" />
        </div>
        <div className="text-xs">{title}</div>
      </div>
    </div>
  );
};

export default VideoCaption;

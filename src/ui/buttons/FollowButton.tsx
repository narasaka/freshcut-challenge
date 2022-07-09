import { ChangeEvent, ComponentPropsWithRef, useState } from "react";
import { BsCheck, BsPlus } from "react-icons/bs";

interface FollowButtonProps extends ComponentPropsWithRef<"button"> {}

const FollowButton: React.FC<FollowButtonProps> = ({ className }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <button
      className={`${className} ${
        isFollowing ? "bg-neutral-800 text-white" : "bg-yellow-500 text-black"
      } rounded-full pl-3 pr-4 py-2 flex gap-1 items-center justify-center`}
      onClick={() => setIsFollowing((state) => !state)}
    >
      {isFollowing ? <BsCheck size={24} /> : <BsPlus size={24} />}
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;

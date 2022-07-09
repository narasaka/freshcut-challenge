import { ComponentPropsWithoutRef } from "react";

interface UserProfilePicture extends ComponentPropsWithoutRef<"div"> {}

const UserProfilePicture: React.FC = () => {
  return (
    <div className="bg-yellow-500 rounded-full min-w-[6rem] min-h-[6rem]"></div>
  );
};

export default UserProfilePicture;

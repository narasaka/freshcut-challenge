import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";

interface UserProfilePictureProps extends ComponentPropsWithoutRef<"div"> {
  url: string;
}

const UserProfilePicture: React.FC<UserProfilePictureProps> = ({
  className,
  url,
}) => {
  return (
    <div className={`bg-yellow-500 rounded-full overflow-hidden ${className}`}>
      {url !== "" && (
        <Image
          src={url}
          alt="User's profile picture"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default UserProfilePicture;

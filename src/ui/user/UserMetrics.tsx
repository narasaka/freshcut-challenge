import { ComponentPropsWithoutRef } from "react";

interface UserMetricsProps extends ComponentPropsWithoutRef<"div"> {}

const UserMetrics: React.FC<UserMetricsProps> = ({ className }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <div className="text-white text-sm font-thin">
        <span className="font-semibold">234</span> Followers
      </div>
      <div className="text-white text-sm font-thin">
        <span className="font-semibold">12</span> Views
      </div>
      <div className="text-white text-sm font-thin">
        <span className="font-semibold">52</span> Likes
      </div>
    </div>
  );
};

export default UserMetrics;

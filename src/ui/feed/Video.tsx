import { ComponentPropsWithRef, useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { User } from "../../types";
import VideoCaption from "./VideoCaption";
import VideoComments from "./VideoCommentList";

interface VideoProps extends ComponentPropsWithRef<"div"> {
  user: User;
  title: string;
  url: string;
  shares: number;
  likes: number;
  isLiked: boolean;
}

const Video: React.FC<VideoProps> = ({
  user,
  title,
  url,
  className,
  likes,
  shares,
  isLiked,
}) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {hasWindow && (
        <div
          className={`flex flex-col md:rounded-xl lg:flex-row bg-neutral-900 overflow-hidden ${className}`}
        >
          <ReactPlayer url={url} width={"auto"} height={"auto"} />
          <div className="lg:w-[58rem]">
            <VideoCaption user={user} title={title} />
            <VideoComments likes={likes} shares={shares} isLiked={isLiked} />
          </div>
        </div>
      )}
    </>
  );
};

export default Video;

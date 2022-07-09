import { ComponentPropsWithRef, useEffect, useState } from "react";
import {
  BsFillVolumeUpFill,
  BsPauseFill,
  BsPlayFill,
  BsVolumeMuteFill,
} from "react-icons/bs";
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
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {hasWindow && (
        <div
          className={`group flex flex-col md:rounded-xl lg:flex-row bg-neutral-900 overflow-hidden ${className}`}
        >
          <div className="relative">
            <div className="absolute z-10 invisible group-hover:visible top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {isPlaying ? (
                <BsPauseFill
                  color="white"
                  size={72}
                  onClick={() => setIsPlaying((state) => !state)}
                />
              ) : (
                <BsPlayFill
                  color="white"
                  size={72}
                  onClick={() => setIsPlaying((state) => !state)}
                />
              )}
            </div>
            <div className="absolute z-10 invisible group-hover:visible bottom-10 right-10">
              {isMuted ? (
                <BsVolumeMuteFill
                  color="white"
                  size={36}
                  onClick={() => setIsMuted((state) => !state)}
                />
              ) : (
                <BsFillVolumeUpFill
                  color="white"
                  size={36}
                  onClick={() => setIsMuted((state) => !state)}
                />
              )}
            </div>
            <div
              className="bg-black z-0 opacity-0 group-hover:opacity-50 absolute top-0 left-0 right-0 bottom-0"
              onClick={() => setIsPlaying((state) => !state)}
            ></div>
            <ReactPlayer
              url={url}
              width={"auto"}
              height={"auto"}
              muted={isMuted}
              playing={isPlaying}
              loop
            />
          </div>
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

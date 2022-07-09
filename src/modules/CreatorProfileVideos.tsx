import Video from "../ui/feed/Video";

//mock data
import { videoProfileData as data } from "../data";

const CreatorProfileVideos: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {data.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          url={video.url}
          user={{
            username: "aceu",
            profilePictureUrl: "",
          }}
          likes={video.likes}
          shares={video.shares}
          isLiked={video.isLiked}
        />
      ))}
    </div>
  );
};

export default CreatorProfileVideos;

import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FormEvent,
  useState,
} from "react";
import { Comment } from "../../types";
import { FiShare } from "react-icons/fi";
import VideoComment from "./VideoComment";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { nanoid } from "nanoid";

//mock data
import { commentData as data } from "../../data";

interface VideoCommentListProps extends ComponentPropsWithoutRef<"div"> {
  shares: number;
  likes: number;
  isLiked: boolean;
}

const VideoCommentList: React.FC<VideoCommentListProps> = ({
  likes,
  shares,
  isLiked,
}) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(data);
  const [_isLiked, setIsLiked] = useState(isLiked);
  const [totalLikes, setTotalLikes] = useState(likes);
  const [totalShares, setTotalShares] = useState(shares);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const toBeSubmitted: Comment = {
      content: comment,
      date: new Date(),
      id: nanoid(),
      isLiked: false,
      likes: 0,
      user: { username: "Me", profilePictureUrl: "" },
    };

    setComments((comments) => [...comments, toBeSubmitted]);
    setComment("");
  };

  return (
    <div className="bg-neutral-900 p-4 flex flex-col flex-grow gap-4 relative">
      <div>
        <span className="font-semibold">Comments</span> {comments.length}
      </div>
      <div className="flex flex-col gap-4 max-h-40 lg:max-h-min md:flex-grow overflow-y-scroll scrollbar">
        {comments.map((comment: Comment) => (
          <VideoComment
            key={comment.id}
            content={comment.content}
            date={comment.date}
            isLiked={comment.isLiked}
            likes={comment.likes}
            user={comment.user}
          />
        ))}
      </div>
      <form className="flex items-center gap-4 mt-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment"
          className="bg-neutral-800 px-8 py-4 rounded-full w-full outline-none"
          value={comment}
          onChange={handleChange}
          placeholder="Add a comment..."
        />
        <div>
          <button
            type="button"
            onClick={() => setTotalShares((total) => total + 1)}
          >
            <FiShare color="white" size={24} />
          </button>
          <div>{totalShares}</div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setTotalLikes((total) => total + (_isLiked ? -1 : 1));
              setIsLiked((state) => !state);
            }}
          >
            {_isLiked ? (
              <BsHeartFill color="white" size={24} />
            ) : (
              <BsHeart color="white" size={24} />
            )}
          </button>
          <div>{totalLikes}</div>
        </div>
      </form>
    </div>
  );
};

export default VideoCommentList;

import FollowButton from "../ui/buttons/FollowButton";
import Checkmark from "../ui/user/Checkmark";
import UserMetrics from "../ui/user/UserMetrics";
import UserProfilePicture from "../ui/user/UserProfilePicture";
import UserSocials from "../ui/user/UserSocials";

const CreatorProfileBanner: React.FC = () => {
  return (
    <>
      <div className="bg-creator-banner bg-cover bg-center bg-no-repeat w-full h-fit relative flex flex-col items-center md:items-start gap-8 p-8 md:rounded-xl">
        <div className="bg-gradient-to-t from-neutral-900 absolute top-0 left-0 right-0 bottom-0 z-10 md:rounded-xl"></div>
        <div className="z-20 w-full flex flex-col md:flex-row gap-6 md:gap-4 items-center">
          <UserProfilePicture />
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="text-white font-bold text-2xl">CreatorName</div>
              <Checkmark />
            </div>
            <UserMetrics />
            <div className="text-white text-sm font-thin text-center md:text-left w-4/5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
              laudantium?
            </div>
          </div>
          <FollowButton className="md:ml-auto" />
        </div>
        <UserSocials className="z-20" />
      </div>
    </>
  );
};

export default CreatorProfileBanner;

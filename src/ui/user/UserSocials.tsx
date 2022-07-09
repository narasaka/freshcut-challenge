import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { Social } from "../../types";
import { BsInstagram, BsTwitch, BsTwitter, BsYoutube } from "react-icons/bs";

//mock data
export const data: Social[] = [
  {
    id: "twitch",
    url: "https://www.twitch.tv/aceu",
    icon: <BsTwitch color="white" size={20} />,
  },
  {
    id: "youtube",
    url: "https://www.youtube.com/c/Acesu",
    icon: <BsYoutube color="white" size={20} />,
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/nrg.aceu/",
    icon: <BsInstagram color="white" size={20} />,
  },
  {
    id: "twitter",
    url: "https://twitter.com/aceu",
    icon: <BsTwitter color="white" size={20} />,
  },
];

interface UserSocialsProps extends ComponentPropsWithoutRef<"div"> {}

const UserSocials: React.FC<UserSocialsProps> = ({ className }) => {
  return (
    <div className={`${className} flex items-center gap-8`}>
      {data.map((social: Social) => (
        <Link key={social.id} href={social.url}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default UserSocials;

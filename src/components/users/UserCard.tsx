import type { User } from "../../features/users/interface";
import Avatar from "../avatar/Avatar";
import { Mail, MapPinHouse, Building2, Phone, AtSign } from "lucide-react";

interface UserCardProps {
  user: User;
}
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { street, suite, city, zipcode } = user.address;
  const userInfoArr = [
    { icon: Mail, text: user.email },
    { icon: MapPinHouse, text: `${street} ${suite} ${city} ${zipcode}` },
    { icon: Phone, text: user.phone },
    { icon: AtSign, text: user.website },
    { icon: Building2, text: user.company.name },
  ];

  return (
    <div className="border border-slate-600 rounded p-3 relative">
      <div className="bg-slate-200 h-[15%] absolute top-0 left-0 right-0 -z-10 bottom-0 " />
      <div className=" flex flex-col justify-center items-center">
        <span className="text-5xl mb-2">
          <Avatar size={100} name={user.name} />
        </span>
        <p className="text-xl font-bold"> {user.name}</p>
        <p>@{user.username}</p>

        <q className="text-xs mt-1 italic text-center">
          {user.company.catchPhrase}
        </q>
      </div>
      <div className="mt-3 text-sm flex flex-col gap-1">
        {userInfoArr.map((info, index) => (
          <div className="flex items-start gap-2" key={index}>
            <info.icon size={16} className="min-w-[16px] mt-0.5" /> {info.text}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-1.5 text-xs mt-3 flex-wrap">
        {user.company.bs?.split(" ").map((word, index) => (
          <span
            key={index}
            className="whitespace-nowrap break-words rounded-3xl px-1.5 py-0.5 bg-slate-200 border border-slate-600 "
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserCard;

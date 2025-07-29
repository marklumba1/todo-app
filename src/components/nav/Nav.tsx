import { NavLink } from "react-router-dom";
import { Braces } from "lucide-react";
const Nav: React.FC = () => {
  return (
    <div className="flex  px-2 py-5 bg-slate-20 h-[80px] text-slate-600 border-b">
      <NavLink to={"/"} className={" flex gap-2 text-xl items-center font-extrabold"}>
        {<Braces size={30}/>}
       JSON TypeCode Sample
      </NavLink>
    </div>
  );
};
export default Nav;

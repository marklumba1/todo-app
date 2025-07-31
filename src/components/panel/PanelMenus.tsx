import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
interface PanelMenuProps {
  title: string;
  Icon?: LucideIcon;
  path: string;
}
const PanelMenus: React.FC<PanelMenuProps> = ({ title, Icon, path }) => {
  return (
    <NavLink
      to={path}
      title={title}
      className={({ isActive }) =>
        `px-4 py-4 rounded-xl flex gap-2 items-center hover:bg-slate-200 ${
          isActive && "font-bold bg-slate-300 hover:bg-slate-300"
        }`
      }
    >
      {Icon && <Icon size={20} />}
      <p className=" tracking-wide hidden sm:block">{title}</p>
    </NavLink>
  );
};
export default PanelMenus;

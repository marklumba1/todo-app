import type { LucideIcon } from "lucide-react";

interface PanelMenuProps {
  title: string;
  Icon?: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}
const PanelMenus: React.FC<PanelMenuProps> = ({
  title,
  Icon,
  isActive,
  onClick,
}) => {
  return (
    <div
      onMouseDown={onClick}
      className={`px-4 py-4 rounded-xl ${
        isActive
          ? "font-bold bg-[#707fdd1e] text-[#5A6ACF]"
          : "text-[#08243170] hover:bg-[#0824313b]"
      } hover:cursor-pointer`}
    >
      <p className=" tracking-wide">{title}</p>
      {Icon && <Icon />}
      <p>{isActive}</p>
    </div>
  );
};
export default PanelMenus;

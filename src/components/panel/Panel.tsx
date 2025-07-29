import PanelMenus from "./PanelMenus";
import type { LucideIcon } from "lucide-react";
interface MenuItem {
  label: string;
  path: string;
  Icon: LucideIcon;
}

interface PanelSection {
  title: string;
  items: MenuItem[];
}

interface SidePanelProps {
  sections: PanelSection[];
}

const Panel: React.FC<SidePanelProps> = ({ sections }) => {

  return (
    <div className="bg-[#F1F2F7] p-3 flex flex-col gap-12 h-full">
      {sections.map(({ title, items }) => (
        <div key={title}>
          <p className=" text-[#0824317c] uppercase tracking-wider text-sm font-light">
            {title}
          </p>
          <div className="pt-2 flex flex-col gap-1">
            {items.map((item) => (
              <PanelMenus
                title={item.label}
                Icon={item.Icon}
                key={item.label}
                path={item.path}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Panel;

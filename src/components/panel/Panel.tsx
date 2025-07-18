import { useEffect, useState } from "react";
import PanelMenus from "./PanelMenus";

interface MenuItem {
  label: string;
  path?: string;
  count?: number;
}

interface PanelSection {
  title: string;
  items: MenuItem[];
}

interface SidePanelProps {
  sections: PanelSection[];
}

const Panel: React.FC<SidePanelProps> = ({ sections }) => {
  const [activePanelMenu, setActivePanelMenu] = useState<string | null>(null);
  useEffect(()=> console.log(activePanelMenu), [activePanelMenu])
  return (
    <div className="bg-[#F1F2F7] p-3 flex flex-col gap-12">
      {sections.map(({ title, items }) => (
        <div>
          <p className=" text-[#0824317c] uppercase not-first:tracking-wide text-[11px] font-light">{title}</p>
          <div className="pt-2 flex flex-col">
            {items.map((item) => (
              <PanelMenus 
              title={item.label} 
              onClick={() => setActivePanelMenu(item.label)} 
              isActive={activePanelMenu === item.label}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Panel;

import { ReactNode, useState } from "react";

export interface ITabItem {
  id: string | number;
  label: string;
  component?: ReactNode;
}

type props = {
  tabs: ITabItem[];
};

const LibTabs: React.FC<props> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState<ITabItem>(tabs[0]);

  function changeTab(tab: ITabItem) {
    setCurrentTab(tab);
  }

  return (
    <>
      <div className="flex justify-stretch mb-4">
        {tabs.map((tab) => {
          let classes = "grow mt-1 px-2 py-1 border-b-2 text-sm";

          if (tab.id === currentTab.id) {
            classes += " border-secondary";
          } else {
            classes += " border-border hover:border-primary";
          }

          return (
            <button
              key={tab.id}
              className={classes}
              onClick={changeTab.bind("tab", tab)}
            >
              {tab.label}
            </button>
          );
        })}
        <div className="hidden grow border-b-2 border-border"></div>
      </div>

      {currentTab.component}
    </>
  );
};

export default LibTabs;

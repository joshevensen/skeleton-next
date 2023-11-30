import { ReactElement, ReactNode, useState } from "react";
import LibButton, { ButtonTypeEnum } from "./Button";
import { IconNameEnum, IconSizeEnum } from "./Icon";

type props = {
  children: ReactNode;
  heading?: string;
  isCollapsible?: boolean;
  defaultState?: "collapsed" | "expanded";
  right?: ReactElement;
};

const LibCard: React.FC<props> = ({
  children,
  heading,
  right,
  isCollapsible = false,
  defaultState = "expanded",
}) => {
  const [showContent, setShowContent] = useState(
    defaultState === "expanded" ? true : false
  );
  const [iconName, setIconName] = useState(
    defaultState === "expanded" ? IconNameEnum.Collapse : IconNameEnum.Expand
  );

  function toggleContent() {
    setShowContent((state) => {
      setIconName(!state ? IconNameEnum.Collapse : IconNameEnum.Expand);
      return !state;
    });
  }

  return (
    <section className="border border-border rounded-lg py-2 px-3">
      {heading && (
        <header className="flex justify-between items-center">
          <h3 className="uppercase font-medium text-text-light">{heading}</h3>

          {isCollapsible && (
            <LibButton
              type={ButtonTypeEnum.Icon}
              iconName={iconName}
              iconSize={IconSizeEnum.Large}
              onClick={toggleContent}
            />
          )}
          {!isCollapsible && (
            <div className="flex items-center space-x-3">{right}</div>
          )}
        </header>
      )}

      {showContent && <div className="mt-4">{children}</div>}
    </section>
  );
};

export default LibCard;

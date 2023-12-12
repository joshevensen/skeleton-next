import { ReactElement, ReactNode, useState } from "react";
import LibIcon, { IconNameEnum, IconSizeEnum } from "./Icon";

type props = {
  children?: ReactNode;
  className?: string;
  heading?: string;
  noPadding?: boolean;
  isCollapsible?: boolean;
  defaultCollapsed?: boolean;
  right?: ReactElement;
};

const LibCard: React.FC<props> = ({
  children,
  className,
  heading,
  noPadding = false,
  isCollapsible = false,
  defaultCollapsed = false,
}) => {
  const [showContent, setShowContent] = useState(
    defaultCollapsed ? false : true
  );
  const [iconName, setIconName] = useState(
    defaultCollapsed ? IconNameEnum.Expand : IconNameEnum.Collapse
  );

  function toggleContent() {
    setShowContent((state) => {
      setIconName(!state ? IconNameEnum.Collapse : IconNameEnum.Expand);
      return !state;
    });
  }

  const padding = noPadding ? "" : "py-2 px-3";
  const contentMargin = noPadding ? "" : "mt-2";
  const headerClass = "uppercase font-medium";

  return (
    <section
      className={`w-full bg-white border border-border ${padding} ${className}`}
    >
      {isCollapsible && (
        <header
          className="flex justify-between items-center"
          onClick={toggleContent}
        >
          <h3 className={headerClass}>{heading}</h3>

          <LibIcon name={iconName} size={IconSizeEnum.Large} />
        </header>
      )}

      {!isCollapsible && !!heading && (
        <header>
          <h3 className={headerClass}>{heading}</h3>
        </header>
      )}

      {showContent && <div className={contentMargin}>{children}</div>}
    </section>
  );
};

export default LibCard;

import { ReactElement, ReactNode, useState } from "react";
import LibIcon from "./Icon";
import { IconNames, IconSizes } from "../enums";

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
    defaultCollapsed ? IconNames.Expand : IconNames.Collapse
  );

  function toggleContent() {
    setShowContent((state) => {
      setIconName(!state ? IconNames.Collapse : IconNames.Expand);
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

          <LibIcon name={iconName} size={IconSizes.Large} />
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

import { ReactNode } from "react";
import { useRouter } from "next/router";
import LibIcon from "./Icon";
import {
  ButtonTypes,
  ButtonColors,
  ButtonSizes,
  IconNames,
  IconSizes,
} from "../enums";

type props = {
  onClick?: () => void;

  type?: ButtonTypes;
  color?: ButtonColors;
  size?: ButtonSizes;

  children?: ReactNode;
  iconName?: IconNames;

  isSubmit?: boolean;
  href?: string;
  title?: string;
  isFullWidth?: boolean;
  isExternalLink?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const LibButton: React.FC<props> = ({
  onClick,
  children,

  type = ButtonTypes.Solid,
  color = ButtonColors.Primary,
  size = ButtonSizes.Medium,

  iconName,

  isSubmit = false,
  href,
  title,
  isFullWidth = false,
  isExternalLink = false,
  isDisabled = false,
  isLoading = false,
}) => {
  const router = useRouter();

  function clickButton() {
    if (href) {
      if (isExternalLink) {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
    } else if (onClick) {
      onClick();
    }
  }

  /**
   * Common Variables
   */
  const loadingContent = "...";

  let sizeClasses = "py-1 px-4";
  if (size === ButtonSizes.Small) sizeClasses = "py-1 px-2 text-sm";
  if (size === ButtonSizes.Large) sizeClasses = "py-2 px-6 text-2xl";

  const widthClass = isFullWidth ? "w-full" : "";
  const borderClass = "border-2 rounded";
  const textClasses = "font-medium uppercase tracking-wide";
  let commonClasses = `flex justify-center items-center ${widthClass} ${borderClass} ${textClasses} disabled:cursor-not-allowed`;

  switch (type) {
    /**
     * Icon Button
     */
    case ButtonTypes.Icon:
      if (iconName) {
        let iconClasses = "bg-transparent border-transparent";

        switch (color) {
          case ButtonColors.Light:
            iconClasses +=
              " text-light hover:text-light-hover disabled:text-light-disabled";
            break;
          case ButtonColors.Secondary:
            iconClasses +=
              " text-secondary hover:text-secondary-hover disabled:text-secondary-disabled";
            break;
          default:
            iconClasses +=
              " text-primary hover:text-primary-hover disabled:text-primary-disabled";
        }

        let iconSize = IconSizes.Medium;
        if (size === ButtonSizes.Small) iconSize = IconSizes.Small;
        if (size === ButtonSizes.Large) iconSize = IconSizes.Large;

        return (
          <button
            className={`${commonClasses} p-0 ${iconClasses}`}
            type={isSubmit ? "submit" : "button"}
            onClick={clickButton}
            disabled={isDisabled}
            title={title}
          >
            {isLoading && loadingContent}
            {!isLoading && <LibIcon name={iconName} size={iconSize} />}
          </button>
        );
      }
    /**
     * Text Button
     */
    case ButtonTypes.Text:
      let textClasses = "bg-transparent border-transparent";

      switch (color) {
        case ButtonColors.Light:
          textClasses +=
            " text-light hover:text-light-hover disabled:text-light-disabled";
          break;
        case ButtonColors.Secondary:
          textClasses +=
            " text-secondary hover:text-secondary-hover disabled:text-secondary-disabled";
          break;
        default:
          textClasses +=
            " text-primary hover:text-primary-hover disabled:text-primary-disabled";
      }

      return (
        <button
          className={`${commonClasses} ${sizeClasses} ${textClasses}`}
          type={isSubmit ? "submit" : "button"}
          onClick={clickButton}
          disabled={isDisabled}
          title={title}
        >
          {isLoading && loadingContent}
          {!isLoading && children}
        </button>
      );
    /**
     * Outline Button
     */
    case ButtonTypes.Outline:
      let outlineClasses = "bg-transparent disabled:bg-transparent";

      switch (color) {
        case ButtonColors.Light:
          outlineClasses +=
            " border-light text-light hover:bg-light hover:text-white disabled:border-light-disabled disabled:text-light-disabled";
          break;
        case ButtonColors.Secondary:
          outlineClasses +=
            " border-secondary text-secondary hover:bg-secondary hover:text-white disabled:border-secondary-disabled disabled:text-secondary-disabled";
          break;
        default:
          outlineClasses +=
            " border-primary text-primary hover:bg-primary hover:text-white disabled:border-primary-disabled disabled:text-primary-disabled";
      }

      return (
        <button
          className={`${commonClasses} ${sizeClasses} ${outlineClasses}`}
          type={isSubmit ? "submit" : "button"}
          onClick={clickButton}
          disabled={isDisabled}
          title={title}
        >
          {isLoading && loadingContent}
          {!isLoading && children}
        </button>
      );
    /**
     * Solid Button
     */
    default:
      let solidClasses = "text-white";

      switch (color) {
        case ButtonColors.Light:
          solidClasses +=
            " bg-light border-light hover:border-light-hover hover:bg-light-hover disabled:border-light-disabled disabled:bg-light-disabled";
          break;
        case ButtonColors.Secondary:
          solidClasses +=
            " bg-secondary border-secondary hover:border-secondary-hover hover:bg-secondary-hover disabled:border-secondary-disabled disabled:bg-secondary-disabled";
          break;
        default:
          solidClasses +=
            " bg-primary border-primary hover:border-primary-hover hover:bg-primary-hover disabled:border-primary-disabled disabled:bg-primary-disabled";
      }

      return (
        <button
          className={`${commonClasses} ${sizeClasses} ${solidClasses}`}
          type={isSubmit ? "submit" : "button"}
          onClick={clickButton}
          disabled={isDisabled}
          title={title}
        >
          {isLoading && loadingContent}
          {!isLoading && children}
        </button>
      );
  }
};

export default LibButton;

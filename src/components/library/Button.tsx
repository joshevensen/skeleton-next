import { ReactNode } from "react";
import { useRouter } from "next/router";
import LibIcon, { IconNameEnum, IconSizeEnum } from "./Icon";

export enum ButtonTypeEnum {
  Solid = 1,
  Outline,
  Icon,
  Text,
}

export enum ButtonColorEnum {
  Primary = 1,
  Secondary,
  Light,
}

export enum ButtonSizeEnum {
  Small = 1,
  Medium,
  Large,
}

type props = {
  onClick?: () => void;

  type?: ButtonTypeEnum;
  color?: ButtonColorEnum;
  size?: ButtonSizeEnum;

  children?: ReactNode;
  iconName?: IconNameEnum;
  iconSize?: IconSizeEnum;

  isSubmit?: boolean;
  href?: string;
  isExternalLink?: boolean;
  isDisabled?: boolean;
  title?: string;
};

const LibButton: React.FC<props> = ({
  onClick,
  children,

  type = ButtonTypeEnum.Solid,
  color = ButtonColorEnum.Primary,
  size = ButtonSizeEnum.Medium,

  iconName,
  iconSize,

  isSubmit = false,
  href,
  isExternalLink = false,
  isDisabled = false,
  title,
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

  let border = {
    color: "border-primary",
    hover: "hover:border-primary-dark",
    disabled: "disabled:border-primary-light",
  };
  let background = {
    color: "bg-primary",
    hover: "hover:bg-primary-dark",
    disabled: "disabled:bg-primary-light",
  };
  let text = {
    color: "text-primary",
    hover: "hover:text-primary-dark",
    disabled: "disabled:text-primary-light",
  };

  if (color === ButtonColorEnum.Secondary) {
    border = {
      color: "border-secondary",
      hover: "hover:border-secondary-dark",
      disabled: "disabled:border-secondary-light",
    };
    background = {
      color: "bg-secondary",
      hover: "hover:bg-secondary-dark",
      disabled: "disabled:bg-secondary-light",
    };
    text = {
      color: "text-secondary",
      hover: "hover:bg-secondary-dark",
      disabled: "disabled:text-secondary-light",
    };
  }

  if (color === ButtonColorEnum.Light) {
    border = {
      color: "border-text-text-light",
      hover: "hover:border-text",
      disabled: "disabled:border-text-text-muted",
    };
    background = {
      color: "bg-text-text-light",
      hover: "hover:bg-text",
      disabled: "disabled:bg-text-text-muted",
    };
    text = {
      color: "text-text-light",
      hover: "hover:text-text",
      disabled: "disabled:text-text-muted",
    };
  }

  let classes = `flex items-center border-2 ${border.color} ${border.hover} ${border.disabled} font-medium uppercase tracking-wide disabled:cursor-not-allowed`;

  if (type === ButtonTypeEnum.Icon) {
    classes += ` bg-transparent border-none ${text.color} ${text.hover} ${text.disabled}`;
  } else if (type === ButtonTypeEnum.Outline) {
    classes += ` bg-transparent ${background.hover} ${text.color} hover:text-white ${text.disabled}`;
  } else {
    classes += ` ${background.color} ${background.hover} ${background.disabled} text-white`;
  }

  if (type === ButtonTypeEnum.Icon) {
    classes += ` p-0`;
  } else if (size === ButtonSizeEnum.Small) {
    classes += " py-1 px-4 text-sm";
  } else if (size === ButtonSizeEnum.Large) {
    classes += " py-2 px-6 text-2xl";
  } else {
    classes += " py-1 px-4";
  }

  let content = children;

  if (type === ButtonTypeEnum.Icon && iconName) {
    content = <LibIcon name={iconName} size={iconSize} />;
  }

  return (
    <button
      className={classes}
      type={isSubmit ? "submit" : "button"}
      onClick={clickButton}
      disabled={isDisabled}
      title={title}
    >
      {content}
    </button>
  );
};

export default LibButton;

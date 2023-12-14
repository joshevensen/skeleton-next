import Icon from "@mdi/react";
import { IconSizes } from "../enums";

/**
 * Instructions
 * https://github.com/Templarian/MaterialDesign-React
 *
 * 1. Add Icon Path to libConfig
 */

type props = {
  path: string;
  size?: IconSizes;
  className?: string;
  spin?: boolean;
};

const LibIcon: React.FC<props> = ({
  path,
  size = IconSizes.Medium,
  className,
  spin = false,
}) => {
  let iconSize = null;

  switch (size) {
    case IconSizes.Small:
      iconSize = 0.8;
      break;
    case IconSizes.Medium:
      iconSize = 1.1;
      break;
    case IconSizes.Large:
      iconSize = 1.5;
      break;
    default:
      iconSize = 1;
  }

  return <Icon className={className} path={path} size={iconSize} spin={spin} />;
};

export default LibIcon;

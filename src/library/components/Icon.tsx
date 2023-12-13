import {
  BiCheckDouble,
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiChevronUp,
  BiDownArrowAlt,
  BiEditAlt,
  BiError,
  BiErrorAlt,
  BiHome,
  BiInfoCircle,
  BiLeftArrowAlt,
  BiLibrary,
  BiMenu,
  BiPlus,
  BiRightArrowAlt,
  BiSlider,
  BiUpArrowAlt,
  BiX,
} from "react-icons/bi"; // https://boxicons.com/
import { IconNames, IconSizes } from "../enums";

/**
 * Instructions
 * https://react-icons.github.io/react-icons/
 *
 * 1. Add Icon Name to IconNameEnum
 * 2. Add Icon to Icon Name Switch statement below
 */

type props = {
  name: IconNames;
  size?: IconSizes;
  className?: string;
};

const LibIcon: React.FC<props> = ({
  name,
  size = IconSizes.Medium,
  className = "",
}) => {
  let classes: string = "";

  switch (size) {
    case IconSizes.Small:
      classes = `h-4 w-4 ${className}`;
      break;
    case IconSizes.Medium:
      classes = `h-5 w-5 ${className}`;
      break;
    case IconSizes.Large:
      classes = `h-8 w-8 ${className}`;
      break;
    default:
      classes = `h-5 w-5 ${className}`;
  }

  /**
   * Icon Name Switch
   */
  switch (name) {
    case IconNames.Add:
      return <BiPlus className={classes} />;
    case IconNames.Close:
      return <BiX className={classes} />;
    case IconNames.Collapse:
      return <BiChevronUp className={classes} />;
    case IconNames.Down:
      return <BiDownArrowAlt className={classes} />;
    case IconNames.Edit:
      return <BiEditAlt className={classes} />;
    case IconNames.Expand:
      return <BiChevronDown className={classes} />;
    case IconNames.Left:
      return <BiLeftArrowAlt className={classes} />;
    case IconNames.Menu:
      return <BiMenu className={classes} />;
    case IconNames.Next:
      return <BiChevronRight className={classes} />;
    case IconNames.Prev:
      return <BiChevronLeft className={classes} />;
    case IconNames.Right:
      return <BiRightArrowAlt className={classes} />;
    case IconNames.Up:
      return <BiUpArrowAlt className={classes} />;

    case IconNames.Home:
      return <BiHome className={classes} />;
    case IconNames.Library:
      return <BiLibrary className={classes} />;
    case IconNames.Settings:
      return <BiSlider className={classes} />;

    case IconNames.Info:
      return <BiInfoCircle className={classes} />;
    case IconNames.Danger:
      return <BiErrorAlt className={classes} />;
    case IconNames.Warning:
      return <BiError className={classes} />;
    case IconNames.Success:
      return <BiCheckDouble className={classes} />;
    default:
      return null;
  }
};

export default LibIcon;

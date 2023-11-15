import {
  BiChevronLeft,
  BiChevronRight,
  BiDownArrowAlt,
  BiEditAlt,
  BiHome,
  BiLeftArrowAlt,
  BiLogOut,
  BiPlus,
  BiRightArrowAlt,
  BiSlider,
  BiUpArrowAlt,
  BiX,
} from "react-icons/bi";

/**
 * Instructions
 *
 * 1. Add Icon Name to IconNameEnum
 * 2. Add Icon to Icon Name Switch statement below
 *
 * NOTE: Put icons in alphabetical order to make things easier to find
 */

export enum IconNameEnum {
  Add,
  Close,
  Down,
  Edit,
  Home,
  Left,
  Logout,
  Next,
  Prev,
  Right,
  Settings,
  Up,
}

export enum IconSizeEnum {
  Small = 1,
  Medium,
  Large,
}

type props = {
  name: IconNameEnum;
  size?: IconSizeEnum;
  className?: string;
};

const LibIcon: React.FC<props> = ({
  name,
  size = IconSizeEnum.Medium,
  className = "",
}) => {
  let classes: string = "";

  switch (size) {
    case IconSizeEnum.Small:
      classes = `h-4 w-4 ${className}`;
      break;
    case IconSizeEnum.Medium:
      classes = `h-5 w-5 ${className}`;
      break;
    case IconSizeEnum.Large:
      classes = `h-8 w-8 ${className}`;
      break;
    default:
      classes = `h-5 w-5 ${className}`;
  }

  /**
   * Icon Name Switch
   */
  switch (name) {
    case IconNameEnum.Add:
      return <BiPlus className={classes} />;
    case IconNameEnum.Close:
      return <BiX className={classes} />;
    case IconNameEnum.Down:
      return <BiDownArrowAlt className={classes} />;
    case IconNameEnum.Edit:
      return <BiEditAlt className={classes} />;
    case IconNameEnum.Left:
      return <BiLeftArrowAlt className={classes} />;
    case IconNameEnum.Home:
      return <BiHome className={classes} />;
    case IconNameEnum.Logout:
      return <BiLogOut className={classes} />;
    case IconNameEnum.Next:
      return <BiChevronRight className={classes} />;
    case IconNameEnum.Prev:
      return <BiChevronLeft className={classes} />;
    case IconNameEnum.Right:
      return <BiRightArrowAlt className={classes} />;
    case IconNameEnum.Settings:
      return <BiSlider className={classes} />;
    case IconNameEnum.Up:
      return <BiUpArrowAlt className={classes} />;
    default:
      return null;
  }
};

export default LibIcon;

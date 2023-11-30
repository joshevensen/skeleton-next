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
  BiPlus,
  BiRightArrowAlt,
  BiSlider,
  BiUpArrowAlt,
  BiX,
} from "react-icons/bi"; // https://boxicons.com/

/**
 * Instructions
 * https://react-icons.github.io/react-icons/
 *
 * 1. Add Icon Name to IconNameEnum
 * 2. Add Icon to Icon Name Switch statement below
 */

export enum IconNameEnum {
  Add,
  Close,
  Collapse,
  Down,
  Edit,
  Expand,
  Left,
  Next,
  Prev,
  Right,
  Up,

  Home,
  Library,
  Settings,

  Info,
  Danger,
  Warning,
  Success,
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
    case IconNameEnum.Collapse:
      return <BiChevronUp className={classes} />;
    case IconNameEnum.Down:
      return <BiDownArrowAlt className={classes} />;
    case IconNameEnum.Edit:
      return <BiEditAlt className={classes} />;
    case IconNameEnum.Expand:
      return <BiChevronDown className={classes} />;
    case IconNameEnum.Left:
      return <BiLeftArrowAlt className={classes} />;
    case IconNameEnum.Next:
      return <BiChevronRight className={classes} />;
    case IconNameEnum.Prev:
      return <BiChevronLeft className={classes} />;
    case IconNameEnum.Right:
      return <BiRightArrowAlt className={classes} />;
    case IconNameEnum.Up:
      return <BiUpArrowAlt className={classes} />;

    case IconNameEnum.Home:
      return <BiHome className={classes} />;
    case IconNameEnum.Library:
      return <BiLibrary className={classes} />;
    case IconNameEnum.Settings:
      return <BiSlider className={classes} />;

    case IconNameEnum.Info:
      return <BiInfoCircle className={classes} />;
    case IconNameEnum.Danger:
      return <BiErrorAlt className={classes} />;
    case IconNameEnum.Warning:
      return <BiError className={classes} />;
    case IconNameEnum.Success:
      return <BiCheckDouble className={classes} />;
    default:
      return null;
  }
};

export default LibIcon;

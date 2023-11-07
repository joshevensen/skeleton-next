import { BiEditAlt, BiLogOut, BiPlus, BiSlider, BiX } from "react-icons/bi";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
  LuType,
  LuListOrdered,
  LuList,
  LuQuote,
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
  LuBold,
  LuItalic,
  LuLink,
  LuStrikethrough,
  LuUnderline,
  LuUndo2,
  LuRedo2,
  LuMinus,
  LuCode,
} from "react-icons/lu";

export enum IconNameEnum {
  AlignCenter = 1,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HorizontalRule,
  Italic,
  Link,
  ListBulleted,
  ListOrdered,
  Paragraph,
  Quote,
  Redo,
  Strikethrough,
  Underline,
  Undo,

  Add,
  Close,
  Edit,
  Logout,
  Settings,
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
  let classes = null;

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

  switch (name) {
    case IconNameEnum.AlignCenter:
      return <LuAlignCenter className={classes} />;
    case IconNameEnum.AlignJustify:
      return <LuAlignJustify className={classes} />;
    case IconNameEnum.AlignLeft:
      return <LuAlignLeft className={classes} />;
    case IconNameEnum.AlignRight:
      return <LuAlignRight className={classes} />;
    case IconNameEnum.Bold:
      return <LuBold className={classes} />;
    case IconNameEnum.Code:
      return <LuCode className={classes} />;
    case IconNameEnum.Heading1:
      return <LuHeading1 className={classes} />;
    case IconNameEnum.Heading2:
      return <LuHeading2 className={classes} />;
    case IconNameEnum.Heading3:
      return <LuHeading3 className={classes} />;
    case IconNameEnum.Heading4:
      return <LuHeading4 className={classes} />;
    case IconNameEnum.Heading5:
      return <LuHeading5 className={classes} />;
    case IconNameEnum.Heading6:
      return <LuHeading6 className={classes} />;
    case IconNameEnum.HorizontalRule:
      return <LuMinus className={classes} />;
    case IconNameEnum.Italic:
      return <LuItalic className={classes} />;
    case IconNameEnum.Link:
      return <LuLink className={classes} />;
    case IconNameEnum.ListBulleted:
      return <LuList className={classes} />;
    case IconNameEnum.ListOrdered:
      return <LuListOrdered className={classes} />;
    case IconNameEnum.Paragraph:
      return <LuType className={classes} />;
    case IconNameEnum.Quote:
      return <LuQuote className={classes} />;
    case IconNameEnum.Redo:
      return <LuRedo2 className={classes} />;
    case IconNameEnum.Strikethrough:
      return <LuStrikethrough className={classes} />;
    case IconNameEnum.Underline:
      return <LuUnderline className={classes} />;
    case IconNameEnum.Undo:
      return <LuUndo2 className={classes} />;
  }

  switch (name) {
    case IconNameEnum.Add:
      return <BiPlus className={classes} />;
    case IconNameEnum.Close:
      return <BiX className={classes} />;
    case IconNameEnum.Edit:
      return <BiEditAlt className={classes} />;
    case IconNameEnum.Logout:
      return <BiLogOut className={classes} />;
    case IconNameEnum.Settings:
      return <BiSlider className={classes} />;
    default:
      return null;
  }
};

export default LibIcon;

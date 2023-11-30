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

export enum EditorIconsEnum {
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
}

type props = {
  name: EditorIconsEnum;
  className?: string;
};

const EditorIcon: React.FC<props> = ({ name, className = "" }) => {
  const classes = `h-4 w-4 ${className}`;

  switch (name) {
    case EditorIconsEnum.AlignCenter:
      return <LuAlignCenter className={classes} />;
    case EditorIconsEnum.AlignJustify:
      return <LuAlignJustify className={classes} />;
    case EditorIconsEnum.AlignLeft:
      return <LuAlignLeft className={classes} />;
    case EditorIconsEnum.AlignRight:
      return <LuAlignRight className={classes} />;
    case EditorIconsEnum.Bold:
      return <LuBold className={classes} />;
    case EditorIconsEnum.Code:
      return <LuCode className={classes} />;
    case EditorIconsEnum.Heading1:
      return <LuHeading1 className={classes} />;
    case EditorIconsEnum.Heading2:
      return <LuHeading2 className={classes} />;
    case EditorIconsEnum.Heading3:
      return <LuHeading3 className={classes} />;
    case EditorIconsEnum.Heading4:
      return <LuHeading4 className={classes} />;
    case EditorIconsEnum.Heading5:
      return <LuHeading5 className={classes} />;
    case EditorIconsEnum.Heading6:
      return <LuHeading6 className={classes} />;
    case EditorIconsEnum.HorizontalRule:
      return <LuMinus className={classes} />;
    case EditorIconsEnum.Italic:
      return <LuItalic className={classes} />;
    case EditorIconsEnum.Link:
      return <LuLink className={classes} />;
    case EditorIconsEnum.ListBulleted:
      return <LuList className={classes} />;
    case EditorIconsEnum.ListOrdered:
      return <LuListOrdered className={classes} />;
    case EditorIconsEnum.Paragraph:
      return <LuType className={classes} />;
    case EditorIconsEnum.Quote:
      return <LuQuote className={classes} />;
    case EditorIconsEnum.Redo:
      return <LuRedo2 className={classes} />;
    case EditorIconsEnum.Strikethrough:
      return <LuStrikethrough className={classes} />;
    case EditorIconsEnum.Underline:
      return <LuUnderline className={classes} />;
    case EditorIconsEnum.Undo:
      return <LuUndo2 className={classes} />;
    default:
      return null;
  }
};

export default EditorIcon;

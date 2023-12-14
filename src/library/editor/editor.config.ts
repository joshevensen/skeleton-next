import {
  mdiCodeTags,
  mdiFormatAlignCenter,
  mdiFormatAlignJustify,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
  mdiFormatBold,
  mdiFormatHeader1,
  mdiFormatHeader2,
  mdiFormatHeader3,
  mdiFormatHeader4,
  mdiFormatHeader5,
  mdiFormatHeader6,
  mdiFormatItalic,
  mdiFormatListBulleted,
  mdiFormatListNumbered,
  mdiFormatParagraph,
  mdiFormatQuoteOpen,
  mdiFormatStrikethrough,
  mdiFormatUnderline,
  mdiLinkVariant,
  mdiMinus,
  mdiRedo,
  mdiUndo,
} from "@mdi/js";

const editorConfig = {
  // Add SVG Paths with names here. See README for more info
  icons: {
    AlignCenter: mdiFormatAlignCenter,
    AlignJustify: mdiFormatAlignJustify,
    AlignLeft: mdiFormatAlignLeft,
    AlignRight: mdiFormatAlignRight,

    Bold: mdiFormatBold,
    Italic: mdiFormatItalic,
    Underline: mdiFormatUnderline,
    Strikethrough: mdiFormatStrikethrough,

    Paragraph: mdiFormatParagraph,
    Heading1: mdiFormatHeader1,
    Heading2: mdiFormatHeader2,
    Heading3: mdiFormatHeader3,
    Heading4: mdiFormatHeader4,
    Heading5: mdiFormatHeader5,
    Heading6: mdiFormatHeader6,
    Code: mdiCodeTags,
    Quote: mdiFormatQuoteOpen,

    Link: mdiLinkVariant,
    ListBulleted: mdiFormatListBulleted,
    ListOrdered: mdiFormatListNumbered,
    HorizontalRule: mdiMinus,

    Redo: mdiRedo,
    Undo: mdiUndo,
  },
};

export default editorConfig;

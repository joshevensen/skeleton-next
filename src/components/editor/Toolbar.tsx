import LibDivider from "../library/Divider";
import { IconNameEnum } from "../library/Icon";
import EditorButton from "./Button";

const EditorToolbar: React.FC<{ editor: any }> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex space-x-1 py-2 px-2 overflow-x-auto">
      <EditorButton
        iconName={IconNameEnum.Bold}
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        isDisabled={!editor.can().chain().focus().toggleBold().run()}
      />

      <EditorButton
        iconName={IconNameEnum.Italic}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        isDisabled={!editor.can().chain().focus().toggleItalic().run()}
      />

      <EditorButton
        iconName={IconNameEnum.Underline}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        isActive={editor.isActive("underline")}
        isDisabled={!editor.can().chain().focus().toggleUnderline().run()}
      />

      <EditorButton
        iconName={IconNameEnum.Strikethrough}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("italstrikeic")}
        isDisabled={!editor.can().chain().focus().toggleStrike().run()}
      />

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconName={IconNameEnum.AlignLeft}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        isActive={editor.isActive({ textAlign: "left" })}
      />

      <EditorButton
        iconName={IconNameEnum.AlignCenter}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        isActive={editor.isActive({ textAlign: "center" })}
      />

      <EditorButton
        iconName={IconNameEnum.AlignRight}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        isActive={editor.isActive({ textAlign: "right" })}
      />

      <EditorButton
        iconName={IconNameEnum.AlignJustify}
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        isActive={editor.isActive({ textAlign: "justify" })}
      />

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconName={IconNameEnum.Paragraph}
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive("paragraph")}
      />

      <EditorButton
        iconName={IconNameEnum.Heading2}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
      />

      <EditorButton
        iconName={IconNameEnum.Heading3}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive("heading", { level: 3 })}
      />

      <EditorButton
        iconName={IconNameEnum.Heading4}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        isActive={editor.isActive("heading", { level: 4 })}
      />

      <EditorButton
        iconName={IconNameEnum.Heading5}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        isActive={editor.isActive("heading", { level: 5 })}
      />

      <EditorButton
        iconName={IconNameEnum.Heading6}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        isActive={editor.isActive("heading", { level: 6 })}
      />

      <EditorButton
        iconName={IconNameEnum.ListBulleted}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
      />

      <EditorButton
        iconName={IconNameEnum.ListOrdered}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
      />

      <EditorButton
        iconName={IconNameEnum.Code}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
      />

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconName={IconNameEnum.Link}
        onClick={() => editor.chain().focus().toggleLink().run()}
        isActive={editor.isActive("link")}
      />

      <EditorButton
        iconName={IconNameEnum.Quote}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
      />

      {/* <EditorButton
        iconName={IconNameEnum.HorizontalRule}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      /> */}

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconName={IconNameEnum.Undo}
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={!editor.can().chain().focus().undo().run()}
      />

      <EditorButton
        iconName={IconNameEnum.Redo}
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={!editor.can().chain().focus().redo().run()}
      />
    </div>
  );
};

export default EditorToolbar;

import LibDivider from "../Divider";
import EditorButton from "./Button";
import { EditorIconsEnum } from "./Icon";

const EditorToolbar: React.FC<{ editor: any }> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex space-x-1 py-2 px-2 overflow-x-auto">
      <EditorButton
        iconName={EditorIconsEnum.Bold}
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        isDisabled={!editor.can().chain().focus().toggleBold().run()}
      />

      <EditorButton
        iconName={EditorIconsEnum.Italic}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        isDisabled={!editor.can().chain().focus().toggleItalic().run()}
      />

      <EditorButton
        iconName={EditorIconsEnum.Underline}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        isActive={editor.isActive("underline")}
        isDisabled={!editor.can().chain().focus().toggleUnderline().run()}
      />

      <EditorButton
        iconName={EditorIconsEnum.Strikethrough}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("italstrikeic")}
        isDisabled={!editor.can().chain().focus().toggleStrike().run()}
      />

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconName={EditorIconsEnum.AlignLeft}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        isActive={editor.isActive({ textAlign: "left" })}
      />

      <EditorButton
        iconName={EditorIconsEnum.AlignCenter}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        isActive={editor.isActive({ textAlign: "center" })}
      />

      <EditorButton
        iconName={EditorIconsEnum.AlignRight}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        isActive={editor.isActive({ textAlign: "right" })}
      />

      <EditorButton
        iconName={EditorIconsEnum.AlignJustify}
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        isActive={editor.isActive({ textAlign: "justify" })}
      />

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconName={EditorIconsEnum.Paragraph}
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive("paragraph")}
      />

      <EditorButton
        iconName={EditorIconsEnum.Heading2}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
      />

      <EditorButton
        iconName={EditorIconsEnum.Heading3}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive("heading", { level: 3 })}
      />

      <EditorButton
        iconName={EditorIconsEnum.Heading4}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        isActive={editor.isActive("heading", { level: 4 })}
      />

      <EditorButton
        iconName={EditorIconsEnum.Heading5}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        isActive={editor.isActive("heading", { level: 5 })}
      />

      <EditorButton
        iconName={EditorIconsEnum.Heading6}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        isActive={editor.isActive("heading", { level: 6 })}
      />

      <EditorButton
        iconName={EditorIconsEnum.ListBulleted}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
      />

      <EditorButton
        iconName={EditorIconsEnum.ListOrdered}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
      />

      <EditorButton
        iconName={EditorIconsEnum.Code}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
      />

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconName={EditorIconsEnum.Link}
        onClick={() => editor.chain().focus().toggleLink().run()}
        isActive={editor.isActive("link")}
      />

      <EditorButton
        iconName={EditorIconsEnum.Quote}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
      />

      {/* <EditorButton
        iconName={EditorIconsEnum.HorizontalRule}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      /> */}

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconName={EditorIconsEnum.Undo}
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={!editor.can().chain().focus().undo().run()}
      />

      <EditorButton
        iconName={EditorIconsEnum.Redo}
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={!editor.can().chain().focus().redo().run()}
      />
    </div>
  );
};

export default EditorToolbar;

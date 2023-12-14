import LibDivider from "../components/Divider";
import EditorButton from "./Button";
import editorConfig from "./editor.config";

const EditorToolbar: React.FC<{ editor: any }> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex space-x-1 py-2 px-2 overflow-x-auto">
      <EditorButton
        iconPath={editorConfig.icons.Bold}
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        isDisabled={!editor.can().chain().focus().toggleBold().run()}
      />

      <EditorButton
        iconPath={editorConfig.icons.Italic}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        isDisabled={!editor.can().chain().focus().toggleItalic().run()}
      />

      <EditorButton
        iconPath={editorConfig.icons.Underline}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        isActive={editor.isActive("underline")}
        isDisabled={!editor.can().chain().focus().toggleUnderline().run()}
      />

      <EditorButton
        iconPath={editorConfig.icons.Strikethrough}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("italstrikeic")}
        isDisabled={!editor.can().chain().focus().toggleStrike().run()}
      />

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconPath={editorConfig.icons.AlignLeft}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        isActive={editor.isActive({ textAlign: "left" })}
      />

      <EditorButton
        iconPath={editorConfig.icons.AlignCenter}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        isActive={editor.isActive({ textAlign: "center" })}
      />

      <EditorButton
        iconPath={editorConfig.icons.AlignRight}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        isActive={editor.isActive({ textAlign: "right" })}
      />

      <EditorButton
        iconPath={editorConfig.icons.AlignJustify}
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        isActive={editor.isActive({ textAlign: "justify" })}
      />

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconPath={editorConfig.icons.Paragraph}
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive("paragraph")}
      />

      <EditorButton
        iconPath={editorConfig.icons.Heading2}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
      />

      <EditorButton
        iconPath={editorConfig.icons.Heading3}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive("heading", { level: 3 })}
      />

      <EditorButton
        iconPath={editorConfig.icons.Heading4}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        isActive={editor.isActive("heading", { level: 4 })}
      />

      <EditorButton
        iconPath={editorConfig.icons.Heading5}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        isActive={editor.isActive("heading", { level: 5 })}
      />

      <EditorButton
        iconPath={editorConfig.icons.Heading6}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        isActive={editor.isActive("heading", { level: 6 })}
      />

      <EditorButton
        iconPath={editorConfig.icons.ListBulleted}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
      />

      <EditorButton
        iconPath={editorConfig.icons.ListOrdered}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
      />

      <EditorButton
        iconPath={editorConfig.icons.Code}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
      />

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconPath={editorConfig.icons.Link}
        onClick={() => editor.chain().focus().toggleLink().run()}
        isActive={editor.isActive("link")}
      />

      <EditorButton
        iconPath={editorConfig.icons.Quote}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
      />

      {/* <EditorButton
        iconPath={editorConfig.icons.HorizontalRule}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      /> */}

      <LibDivider type="vertical" insideFlex={true} />

      <EditorButton
        iconPath={editorConfig.icons.Undo}
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={!editor.can().chain().focus().undo().run()}
      />

      <EditorButton
        iconPath={editorConfig.icons.Redo}
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={!editor.can().chain().focus().redo().run()}
      />
    </div>
  );
};

export default EditorToolbar;

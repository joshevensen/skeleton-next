"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Focus from "@tiptap/extension-focus";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Link from "@tiptap/extension-link";
import EditorToolbar from "./Toolbar";

type props = {
  className?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  onChange: (...event: any[]) => void;
};

const LibEditor: React.FC<props> = ({
  className,
  placeholder,
  value,
  rows,
  onChange,
}) => {
  const editor = useEditor({
    content: value ? JSON.parse(value) : "",
    injectCSS: false,
    extensions: [
      Placeholder.configure({
        placeholder: placeholder ? placeholder : "Write something …",
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph", "codeBlock", "blockquote"],
      }),
      Link.configure({
        openOnClick: false,
      }),
      Typography,
      Focus.configure({
        className: "focus:border-0",
      }),
    ],
    onUpdate: ({ editor }) => {
      onChange(JSON.stringify(editor.getJSON()));
    },
  })!;

  // TODO Get rows to determine height
  // TODO Make the editor look better
  // TODO Get links working
  // TODO Get images working

  return (
    <div className={`border border-border prose ${className}`}>
      <EditorToolbar editor={editor} />

      <div className="py-2 px-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default LibEditor;

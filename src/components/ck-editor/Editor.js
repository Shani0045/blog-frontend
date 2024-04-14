import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
 
export default function Editor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={"light"} />;
}
 

"use client";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { startTransition, useState } from "react";
import * as actions from "@/app/actions";
interface SnippetEditFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="jsavascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      ></Editor>
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded"> 
            Save 
        </button>
      </form>
    </div>
  );
};

export default EditSnippetForm;

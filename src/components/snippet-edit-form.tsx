"use client";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
interface SnippetEditFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  async function editSnippet () {
    'use server'
  }

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
    </div>
  );
};

export default EditSnippetForm;

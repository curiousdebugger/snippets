import { db } from "@/db/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

const SnippetShowPage = async (props: SnippetShowPageProps) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
            <Link href={`/snippets/${snippet.id}/edit`}> 
                <button className="p-2 border rounded">Edit</button>
            </Link>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
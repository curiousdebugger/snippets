import { db } from "@/db/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snip) => {
    return (
      <Link
        className="flex justify-between items-center p-2 border rounded"
        key={snip.id}
        href={`/snippets/${snip.id}`}
      >
        {snip.title}
      </Link>
    );
  });
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded" > Create New </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}

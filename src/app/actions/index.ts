"use server";
import { db } from "@/db/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  const snippet = await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");
    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer",
      };
    }
    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "Code must be longer",
      };
    }

    // Create a new record in DB
    await db.snippet.create({
      data: { title, code },
    });

    // Redirect to the home page
    
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        messasge: "Something went wrong.",
      };
    }
  }
  redirect("/");
}

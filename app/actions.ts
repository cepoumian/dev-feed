"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function bustCache() {
  revalidateTag("posts", "max");
  redirect("/");
}

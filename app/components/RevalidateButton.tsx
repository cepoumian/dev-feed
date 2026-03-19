"use client";

import { bustCache } from "../actions";

export default function RevalidateButton() {
  return <button onClick={async () => await bustCache()}>Refresh Posts</button>;
}

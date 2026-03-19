"use client";

import React from "react";

export default function LikeButton() {
  const [count, setCount] = React.useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

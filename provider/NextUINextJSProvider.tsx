"use client";

import { NextUIProvider } from "@nextui-org/react";

export function NextUINextJSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

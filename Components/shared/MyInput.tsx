"use client";
import { Input } from "@nextui-org/react";

export type myInputType = {
  setText?: React.Dispatch<React.SetStateAction<string>>;
  startContent?: React.ReactNode;
  placeholder?: string;
  label?: string;
};

export function MyInput({
  setText,
  startContent,
  placeholder,
  label,
}: myInputType) {
  return (
    <Input
      onValueChange={setText}
      label={label}
      isClearable
      radius="lg"
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
        clearButton: ["text-black"],
      }}
      placeholder={placeholder}
      startContent={startContent}
    />
  );
}

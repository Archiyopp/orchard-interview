import { PropsWithChildren } from "react";

export function AnchorWrapper({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <a
      className={className}
      onClick={(e) => {
        console.log("%c Logging the clicked element: ", "color: green; font-weight: bold", e.target);
      }}
    >
      {children}
    </a>
  );
}

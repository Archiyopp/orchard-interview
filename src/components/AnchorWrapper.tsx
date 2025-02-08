import { PropsWithChildren } from "react";

export function AnchorWrapper({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <a
      className={className}
      onClick={(e) => {
        console.log(e.target);
      }}
    >
      {children}
    </a>
  );
}

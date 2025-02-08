import { PropsWithChildren } from "react";

export function Headline({
    children,
    className = "",
}: PropsWithChildren<{
    className?: string;
}>) {
    return (
        <h1
            className={`${className} uppercase text-3xl pb-7.5 border-b w-fit mx-auto font-light tracking-[5%]`}
        >
            {children}
        </h1>
    );
}

import { ReactNode } from "react";

export interface GridParams {
    direction: "fd-row" | "fd-row-reverse" | "fd-column" | "fd-column-reverse",
    spacing: "jc-between" | "jc-around" | "jc-center" | "jc-start" | "jc-end",
    align: "start" | "end" | "center",
    wrap: boolean,
    gap: number,
    children: ReactNode,
}
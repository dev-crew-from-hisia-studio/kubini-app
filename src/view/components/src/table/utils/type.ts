import { ReactNode } from "react";

export interface TableParams {
    children?: ReactNode,
}

export interface TableItemParams {
    image?: any,
    title?: any,
    withImage?: boolean,
    subtitle?: any,
    avatarType?: "circle" | "rounded" | "square"
}

export interface TableActionsParams {
    atype?: "large" | "reduce",
    tabs: any[]
}

export interface RowParams {
    rtype?: "header" | "body",
    children?: ReactNode,
}
export interface ColumnParams {
    ctype: "auto" | "mid" | "large" | "small",
    children?: ReactNode,
}
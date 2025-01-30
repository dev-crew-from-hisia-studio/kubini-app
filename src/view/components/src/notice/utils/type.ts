import { ReactNode } from "react";

export interface AlertParams {
    status: "st--info" | "st--danger" | "st--success" | "st--warning",
    withClose?: boolean,
    title: string,
    message: string,
}

export interface ToastParams {
    id: any, 
    status: "st--success" | "st--danger" | "st--info" | "st--warning", 
    fnc: (val?: any) => void, 
    children: ReactNode
}
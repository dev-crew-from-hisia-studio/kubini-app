import { ReactNode } from "react"

export interface ModalParams {
    withClose?: boolean,
    size: "is--sm" | "is--md" | "is--xl" | "is--full-page",
    place?: "as--top" | "as--center" | "as--bottom",
    id: string,
    isOpen?: boolean,
    fnc: (value: boolean) => void,
    children: ReactNode
}

export interface ModalStatusParams {
    status: "success" | "danger" | "warning" | "neutral",
    title?: string,
    subtitle?: string,
    children: ReactNode
}

export interface ModalActionsParams {
    tabsActions: any[]
}

export interface ModalFormParams {
    tabsField: any[]
}
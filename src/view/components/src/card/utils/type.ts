import { ReactNode } from "react";

export interface CardParams {
    id: string,
    title: string,
    subtitle?: string,
    children?: ReactNode,
    actions?: {
        icon?: string, 
        label: string, 
        style: 'neutral' | 'success' | 'primary' | 'danger' | 'secondary' | 'info' | 'warning', 
        onClick: (val?: any) => void | any
    }[],
    tags?: string[],
    withMinOption?: boolean,
    arrayToAction?: any[],
    addOrRemoveToArray?: (val?: any) => void,
}

export interface UserCardParams {
    id: string,
    avatar: string,
    name: string,
    username?: string,
    children?: ReactNode,
    actions?: {
        icon?: string, 
        label: string, 
        onClick: (val?: any) => void | any
    }[],
    options?: {
        icon?: string, 
        label: string, 
        style: 'neutral' | 'success' | 'primary' | 'danger' | 'secondary' | 'info' | 'warning', 
        onClick: (val?: any) => void | any
    }[],

    withMinOption?: boolean,
    arrayToAction?: any[],
    addOrRemoveToArray?: (val?: any) => void,
}
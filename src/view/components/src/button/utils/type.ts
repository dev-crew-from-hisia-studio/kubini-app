export interface ButtonParams {
    iconLeftClass?: string,
    iconRightClass?: string,
    label: string,
    bstyle?: "is--disable" | "is--primary" | "is--secondary" | "is--danger" | "is--success" | "is--warning" | "is--neutral",
    btypo?: "is--icon-btn" | "is--link" | "is--form-btn" | "is--simple-btn",
    btype?: "button" | "submit" | "reset",
    bsize?: "is--responsive" | "is--large",
    onClick?: (val?: any) => any | void,
    navigateLink?: (val?: any) => any | void,
    active?: boolean,
}
export interface TagParams {
    status: 'neutral' | 'success' | 'danger' | 'warning' | 'primary' | 'secondary',
    label: string,
}

export interface ChipParams {
    status: 'neutral' | 'success' | 'danger' | 'warning' | 'primary' | 'secondary',
    label: string,
    iconLeft?: string,
    iconRight?: string,
}
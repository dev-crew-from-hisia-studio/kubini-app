import { ChangeEvent } from "react";

export interface TextfieldParams {
    id: string,
    value: any,
    data?: any,
    require: boolean,
    changeValue: (val: any) => any | void,
    error?: {
      field: string,
      message: string
    }
    placeholder?: string,
    label?: string,
    type: "text" | "number" | "email" | "password" | "username" | "phone" | "textarea" | "time" | "date",
    // tooltip?: string,
    max?: number,
    min?: number,
}

export interface SelectfieldParams {
  id: string,
  value?: string,
  values?: any[],
  label?: string,
  require: boolean,
  changeValue: (val: any) => any | void,
  error?: {
    field: string,
    message: string
  }
  placeholder?: string,
  tooltip?: string,
  tabs: any[],
  multiple?: boolean,
  // withStep?: boolean,
}

export interface MultiFilefieldParams { 
  files: any,
  filesPreview?: any,
  error?: any,
  oldFiles: any, 
  accept: string, 
  max: number, 
  require?: boolean,
  placeholder?: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => any | void,
  removeFile: (val?: any) => void,
  removeOldFile: (val?: any) => void,
  id: string,
}

export interface AvatarFieldParams {
  avatar: any, 
  oldAvatar: any, 
  setAvatar: (val?: any) => any | void,
  setError: (val?: any) => any | void,
  isEdit: boolean;
  setIsEdit: (val?: any) => any | void,
  deleteAvatar: (val?: any) => any | void,
  placeholder?: string,
  id: string,
}

export interface FileFieldParams {
  file: any,
  filePreview?: any,
  oldFile: any, 
  accept: string, 
  require?: boolean,
  placeholder?: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => any | void,
  removeFile?: () => void,
  id: string,
}

export interface TagsfieldParams {
  id: string,
  values?: any[],
  label?: string,
  require: boolean,
  changeValue: (val: any) => any | void,
  error?: {
    field: string,
    message: string
  }
  placeholder?: string,
  tooltip?: string,
}

export interface ICDSearchfieldInterface {
  id: string,
  value: any,
  require: boolean,
  changeValue: (val: any) => any | void,
  error?: {
      field: string,
      message: string
  },
  placeholder?: string,
  label?: string,
  tooltip?: string,
}

export interface RichTextFieldInterface {
  value: string, 
  changeValue: (val: string) => void,
  id: string,
  label: string,
  require: boolean,
  error?: {
    field: string,
    message: string
  },
  placeholder?: string,
  tooltip?: string,
}
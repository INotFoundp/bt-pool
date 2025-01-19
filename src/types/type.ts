// @ts-ignore
import {IconType} from "react-icons/lib/iconBase";

export interface FormType {
    label: string
    type: "text" | "number" | "password" | "date" | "range" | "color" | "checkbox" | "autocomplete" | "textarea" | "select" | "counter" | "switch"
    description?: string
    className?: string
    placeholder?: string
    key: string
    Icon  : IconType
    extra?: ExtraType<FormType["type"]>;

}


type ExtraType<T> = T extends "select"
    ? { options: { label: string; value: string | number }[] }
    : object;



export interface ListType {
    label: string
    description?: string
    href?: string
    Icon?: IconType
    key: string
}
export interface CardType {
    label: string
    img?: string
    description?: string
    extra?: object
}


export interface RequestType<T extends any> {
    ok : boolean
    data : T
}
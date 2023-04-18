import { writable } from "svelte/store";


export type ActiveAccordeonType = number | string | null;

export const activeAccordeon = writable<ActiveAccordeonType>(null);
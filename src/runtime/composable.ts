import { useNuxtApp } from "#app";

export function useEvents() {
    const { $on, $emit } = useNuxtApp();
    return {
        emit: $emit,
        on: $on,
    };
}
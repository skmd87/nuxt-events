import { useNuxtApp } from "#app";

export function useEvent() {
    const { $on, $emit } = useNuxtApp();
    return {
        emit: $emit,
        on: $on,
    };
}
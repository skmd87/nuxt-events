import mitt from "mitt";
import { defineNuxtPlugin } from "#app";
import type { Events } from "#NuxtEvents";

// @ts-ignore
const emitter = mitt<Events>();

declare module "#app" {
    interface NuxtApp {
        $on: typeof emitter.on;
        $emit: typeof emitter.emit;
    }
}

export default defineNuxtPlugin(() => {
    return {
        provide: {
            emit: emitter.emit,
            on: emitter.on
        },
    };
});

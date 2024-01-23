import mitt from "mitt";
import type { Events } from "#NuxtEvents";

export const emitter = mitt<Events>();


/// <reference path="./NuxtEvents.d.ts" />
/// <reference path="../../node_modules/nuxt/dist/app/index" />
import { defineNuxtPlugin } from "#app";
import { emitter } from "./emitter";

declare module "#app" {
	interface NuxtApp  {
		$emit: typeof emitter.emit;
		$on: typeof emitter.on;
		$off: typeof emitter.off;
	}
 }

declare module 'vue' {
	interface ComponentCustomProperties {
		$emit: typeof emitter.emit;
		$on: typeof emitter.on;
		$off: typeof emitter.off;
	}
 }
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$emit: typeof emitter.emit;
		$on: typeof emitter.on;
		$off: typeof emitter.off;
	}
}

export default defineNuxtPlugin(() => {

    return {
		provide: {
			emit: emitter.emit,
			on: emitter.on,
			off: emitter.off
		},
    };
});

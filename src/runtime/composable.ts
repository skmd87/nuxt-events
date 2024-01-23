import { emitter } from "./emitter";

export function useEvents(): {
	emit: typeof emitter.emit;
	on: typeof emitter.on;
	off: typeof emitter.off;
} {    
    return {
        emit: emitter.emit,
		on: emitter.on,
		off: emitter.off
    };
}
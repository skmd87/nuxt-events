<template>
  <div>
    <h1>Events</h1>  
    <div>
      <button
        color="primary"
        variant="elevated"
        @click="emit('test-event', 'from useEvent')"
      >
        Send Event (from useEvent)
      </button>
      <button
        color="primary"
        variant="elevated"
        @click="$emit('test-event', 'from useNuxtApp')"
      >
        Send Event (from
        useNuxtApp)
      </button>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
declare module "#NuxtEvents" {
	interface Events {
		'test-event': string;
	}
}
const { emit, on } = useEvents()

const { $emit } = useNuxtApp()

on('test-event', (v) => alert(`test-event received ${v}`))

</script> 
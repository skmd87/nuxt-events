<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: @skmd87/nuxt-events
- Description: My new Nuxt module
-->

# My Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt Events for global events
- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@skmd87/nuxt-events?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- Global Events
- Composable
- Typescript support

## Quick Setup

1. Add `@skmd87/nuxt-events` dependency to your project

```bash
# Using pnpm
pnpm add -D @skmd87/nuxt-events

# Using yarn
yarn add --dev @skmd87/nuxt-events

# Using npm
npm install --save-dev @skmd87/nuxt-events
```

2. Add `@skmd87/nuxt-events` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@skmd87/nuxt-events'
  ]
})
```

## Usage

```
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
const { emit, on } = useEvent()

const { $emit } = useNuxtApp()

on('test-event', (v) => alert(`test-event received ${v}`))

</script> 
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@skmd87/nuxt-events/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@skmd87/nuxt-events

[npm-downloads-src]: https://img.shields.io/npm/dm/@skmd87/nuxt-events.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@skmd87/nuxt-events

[license-src]: https://img.shields.io/npm/l/@skmd87/nuxt-events.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@skmd87/nuxt-events

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com

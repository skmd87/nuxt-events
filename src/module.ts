import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-events',
    configKey: 'nuxtEvents'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (/*options, nuxt*/) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
	addImports({
		name: 'useEvents',
		as: 'useEvents',
		from: resolver.resolve('./runtime/composable'),
	})     
  }
})

import { defineNuxtModule, addPlugin, createResolver, addImports, addTypeTemplate } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
      addImports({
        name: 'useEvent',
        as: 'useEvent',
        from: resolver.resolve('./runtime/composable'),
      })
      addTypeTemplate({
        src: resolver.resolve('./types/#NuxtEvents.d.ts'),
        filename: '#NuxtEvents.d.ts',
        options: {}
      })
  }
})

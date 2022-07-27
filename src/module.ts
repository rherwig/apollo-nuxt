import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineNuxtModule, addPlugin } from '@nuxt/kit';

export interface ModuleOptions {
    uri: string;
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'apollo-nuxt',
        configKey: 'apolloNuxt',
    },
    setup(options, nuxt) {
        const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
        nuxt.options.build.transpile.push(runtimeDir);

        nuxt.options.runtimeConfig.public.apollo = options;

        addPlugin(resolve(runtimeDir, 'plugin'));
    },
});

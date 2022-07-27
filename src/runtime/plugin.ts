import { DefaultApolloClient } from '@vue/apollo-composable';
import { defineNuxtPlugin, useRuntimeConfig } from '#app';

import createApolloClient from './apollo';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig().public.apollo;

    const apolloClient = createApolloClient({
        ...config,
        initialState: nuxtApp.payload?.apollo,
    });

    nuxtApp.hook('app:rendered', () => {
        if (process.server) {
            nuxtApp.payload.apollo = apolloClient.cache.extract();
        }
    });

    nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});

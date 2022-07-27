import { defineNuxtConfig } from 'nuxt'
import ApolloNuxt from '..'

export default defineNuxtConfig({
    modules: [
        ApolloNuxt,
    ],
    apolloNuxt: {
        uri: 'http://localhost:3000/api/graphql',
    },
})

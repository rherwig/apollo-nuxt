import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

import { ModuleOptions } from '../../module';

export type ApolloConfig = ModuleOptions & {
    initialState: string;
}

export default (config: ApolloConfig) => {
    const { initialState, uri } = config;

    const httpLink = createHttpLink({
        uri,
    });

    const cache = new InMemoryCache();

    if (initialState) {
        const state = JSON.parse(JSON.stringify(initialState));
        cache.restore(state);
    }

    return new ApolloClient({
        link: httpLink,
        cache,
    });
};

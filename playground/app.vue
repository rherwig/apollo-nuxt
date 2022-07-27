<template>
    <div>
        <h1>User</h1>
        <pre>{{ firstUser.name }}</pre>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const { result } = useQuery(gql`
    query getUsers {
        users {
            id
            name
        }
    }
`);

const users = computed(() => result.value?.users ?? []);
const firstUser = computed(() => users?.value[0] ?? {});
</script>

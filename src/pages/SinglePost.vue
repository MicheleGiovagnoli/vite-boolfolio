<template>
    <h1>Questo è un post singolo</h1>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SinglePost',
    data() {
        return {
            store
        }
    },
    mounted() {
        const slug = this.$route.params.slug;

        console.log(slug);

        axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(Response => {
                console.log(Response);
            });

    }
}
</script>
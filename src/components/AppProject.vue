<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h5>{{ project.category?.name }}</h5>
            <p class="card-text">{{ truncateText(project.content) }}</p>
            <router-link :to="{ name: 'single-post', params: { slug: project.slug } }" class="btn btn-primary">
                Vedi post completo
            </router-link>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'AppProject',
    props: ['project'],
    data() {
        return {
            contentMaxLength: 200,
            store
        }
    },
    methods: {
        truncateText(text) {
            if (text && text.length > this.contentMaxLength) {
                return text.substr(0, this.contentMaxLength) + '...';
            }
            return text;
        }
    }
};
</script>
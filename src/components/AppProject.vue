<template>
    <div class="card" style="width: 18rem; height:100%;">
        <img v-if="project.cover_image" :src="`${this.store.baseUrl}/storage/${project.cover_image}`" class="card-img-top">
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top p-5" />
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <span class="badge text-bg-warning rounded-pill" v-for="technology in project.technologies">{{ technology?.name
            }}</span>
            <p class="card-text">{{ truncateText(project.content) }}</p>
            <p class="card-text">{{ project.technologies.name }}</p>
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
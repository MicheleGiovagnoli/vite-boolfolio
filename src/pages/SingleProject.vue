<template>
    <div v-if="project" class="card p-5 m-5">
        <img v-if="project.cover_image" :src="`${this.store.baseUrl}/storage/${project.cover_image}`" class="card-img-top">
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top p-5" />
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <span class="badge text-bg-warning rounded-pill" v-for="technology in project.technologies">{{
                technology?.name
            }}</span>
            <p class="card-text">{{ project.content }}</p>
            <p class="card-text">{{ project.technologies.name }}</p>
            <router-link :to="{ name: 'ProjectList' }" class="btn btn-primary">
                Torna alla lista dei post
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null
        }
    },
    methods: {
        getProject() {
            const slug = this.$route.params.slug;

            console.log(slug);

            axios.get(`${this.store.baseUrl}/api/project/${slug}`)
                .then(Response => {
                    if (Response.data.success == true) {
                        this.project = Response.data.project;
                        console.log(Response.data.project);
                    } else {
                        this.$router.push({ name: 'not-found' });
                    }

                });
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.getProject();
            }
        )
    },
    mounted() {
        this.getProject();
    },
}
</script>
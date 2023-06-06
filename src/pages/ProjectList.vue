<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="project in projects">
                <AppProject :project="project"></AppProject>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import axios from 'axios';
import AppProject from '../components/AppProject.vue';

export default {
    name: 'ProjectList',
    data() {
        return {
            projects: [],
            store,
        }
    },
    components: {
        AppProject
    },
    methods: {
        getProjects(gotoPage) {
            console.log('Ciao mondo!');
            axios.get(`${this.store.baseUrl}/api/projects`,
            )
                .then(Response => {
                    console.log(Response);
                    this.projects = Response.data.results;
                    console.log(this.projects);
                });
        },

    },
    mounted() {
        this.getProjects(1);
    }
}

</script>
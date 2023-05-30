<template>
    <div class="container">
        <div class="row">

        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "AppMain",

    data() {
        return {
            projects: []
        }
    },
    methods: {
        getProjects() {
            console.log('ciaomondo');

            axios.get('http://127.0.0.1:8000/api/projects')
                .then(Response => {
                    console.log(Response);
                    this.projects = Response.data.results;
                });
        }
    },
    mounted() {
        this.getProjects();
    }
}
</script>

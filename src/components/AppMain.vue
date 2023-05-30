<template>
    <div class="container">
        <div class="row">

            <div class="col-3" v-for="project in projects">
                <div class="card" style="width: 18rem;">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.content }}</p>
                        <a href="#" class="btn btn-primary">Go</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "AppMain",

    data() {
        return {
            projects: [],
            Url: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getProjects() {
            console.log('ciaomondo');

            axios.get(`${this.Url}/api/projects`)
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

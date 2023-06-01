<template>
    <div class="container">
        <div class="row">

            <div class="col-4" v-for="project in projects">
                <AppProject :project="project"></AppProject>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <button @click="getProjects(currentPage - 1)"
                            :class="{ 'disabled': currentPage == 1, 'page-link': true }">
                            Previous
                        </button>
                    </li>
                    <li class="page-item">
                        <button @click="getProjects(currentPage + 1)"
                            :class="{ 'disabled': currentPage == lastPage, 'page-link': true }">
                            Next
                        </button>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import axios from 'axios';
import AppProject from '../components/AppProject.vue';

export default {
    name: 'PostList',
    data() {
        return {
            projects: [],
            store,
            currentPage: 1,
            lastPage: null
        }
    },
    components: {
        AppProject
    },
    methods: {
        getProjects(gotoPage) {
            console.log('Ciao mondo!');
            axios.get(`${this.store.baseUrl}/api/projects`,
                {
                    params: {
                        page: gotoPage
                    }
                }
            )
                .then(Response => {
                    console.log(Response);
                    this.projects = Response.data.results;
                    console.log(this.projects);
                    this.currentPage = Response.data.results.current_page;
                    console.log(this.current_page);
                    this.lastPage = Response.data.results.last_page;
                    console.log(this.last_page);
                });
        },

    },
    mounted() {
        this.getProjects(1);
    }
}

</script>
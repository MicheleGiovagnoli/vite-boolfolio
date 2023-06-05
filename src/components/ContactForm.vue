<template>
    <div v-if="success" class="alert alert-success" role="alert">
        Grazie per averci contattati
    </div>
    <form class="p-5" @submit.prevent="sendForm()">
        <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input type="text" class="form-control" id="name" v-model="name" :class="{ 'is-invlaid': errors.name }">
            <div class="invalid-feedback" v-for="error in errors.name">
                {{ error }}
            </div>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" :class="{ 'is-invlaid': errors.email }">
            <div class="invalid-feedback" v-for="error in errors.email">
                {{ error }}
            </div>
        </div>
        <div class="mb-3 form-floating">
            <label for="message">Il tuo messaggio</label>
            <textarea class="form-control" id="message" v-model="message"
                :class="{ 'is-invlaid': errors.message }"></textarea>
            <div class="invalid-feedback" v-for="error in errors.message">
                {{ error }}
            </div>
        </div>

        <button type="submit" class="btn btn-primary" :disabled="sending">
            {{ sending ? 'Invio In corso..' : 'Inviamessaggio' }}
        </button>
    </form>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            sending: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {

            this.success = false;
            this.sending = true;
            this.errors = {};

            axios.post(`${this.store.baseUrl}/api/contacts`,
                {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }
            ).then(Response => {

                if (Response.data.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.success = true
                } else {
                    this.errors = response.data.errors;
                }

            }).catch(error => {
                this.sending = false;
            })
        }
    }
}
</script>
<template>
    <div>
        <Header />
        <section class="section">
            <div class="container">
                <h3 class="title is-4">Languages repo : {{ repo }}</h3>
                <div v-if="loading">Loading...</div>
                <div v-else>
                    <div v-for="(value, name) in languages" :key="name">
                        <div class="box">
                            <h2>{{ name }}: {{ value }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Header from "./Header.vue"
import ApiService from "@/services/Api.service.js";

export default {
    data() {
        return {
            loading: false,
            error: null,
            repo: 'async-dfyon',
            languages: null,
        }
    },

    created() {
        this.getLanguages(this.repo);
    },

    methods: {
        async getLanguages(repository) {
            try {
				this.error = null;
				this.loading = true;
                this.languages = await ApiService.getLanguagesRepo(repository); 
                console.log(this.languages);
			} catch (err) {
				if (err.data && err.data.message) {
					this.error = err.data.message;
				} else {
					this.error = 'try again';
					this.$toasted.error('try again');
				}
			} finally {
				this.loading = false;
			}
        }

    },

    components: {
        Header
    }
}
</script>

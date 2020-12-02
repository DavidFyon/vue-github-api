<template>
    <div>
        <Header />
        <section class="section">
            <div class="container">
                <h3 class="title is-4">Public repos</h3>
                <div v-if="loading">Loading...</div>
                <div v-else>
                    <div v-for="repo in repos" :key="repo.id">
                        <div class="box">
                            <h2>{{ repo.name }}</h2>
                            <span class="tag is-primary" v-show="repo.language">
                                {{ repo.language }}
                            </span>
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
            repos: null
        }
    },

    created() {
        this.getRepos();
    },

    methods: {
        async getRepos() {
            try {
				this.error = null;
				this.loading = true;
                this.repos = await ApiService.getPublicRepos();
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
        },
    },

    components: {
        Header
    }
}
</script>

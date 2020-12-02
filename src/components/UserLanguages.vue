<template>
    <div>
        <Header />
        <section class="section">
            <div class="container">
                <h3 class="title is-4">Most used languages</h3>
                <div v-if="loading">Loading...</div>
                <div v-else>
                    {{ userLanguages }}
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
            repos: null,
            userLanguages: []
        }
    },

    created() {
        this.getRepos();
    },

    updated() {
        this.saveReposLanguages();
    },

    methods: {
        async getRepos() {
            try {
				this.error = null;
				this.loading = true;
                this.repos = await ApiService.getPublicRepos();
                this.succes = true;
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

        async getLanguages(repository) {
            try {
				this.error = null;
				this.loading = true;
                this.languages = await ApiService.getLanguagesRepo(repository); 
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

        saveReposLanguages() {     
            this.userRepos.forEach(function(element) {
                console.log(element.language);
                // this.userLanguages.push(element.language);
                // this.userLanguages.push(this.getLanguages(element.name));
            })
        }
    },

    computed: {
		userRepos(){
			return this.repos;
        }
	},

    components: {
        Header
    }
}
</script>

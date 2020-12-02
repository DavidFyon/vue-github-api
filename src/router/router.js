import Vue from "vue";
import Router from "vue-router";
import Languages from "@/components/Languages.vue";
import Repos from "@/components/Repos.vue";
import UserLanguages from "@/components/UserLanguages.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "repos",
			component: Repos,
		},
		{
			path: "/languages",
			name: "languages",
			component: Languages,
		},
		{
			path: "/user",
			name: "user-languages",
			component: UserLanguages,
		},
	],
});
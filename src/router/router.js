import Vue from "vue";
import Router from "vue-router";
import Languages from "@/components/Languages.vue";
import Repos from "@/components/Repos.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Languages",
			component: Languages,
		},
		{
			path: "/repo",
			name: "Repos",
			component: Repos,
		},
	],
});
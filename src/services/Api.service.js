import axios from "axios";

const API = process.env.VUE_APP_API;
const USER = process.env.VUE_APP_USER;
const AUTH_TOKEN = process.env.VUE_APP_AUTH_TOKEN;

export default {
	/**
	 * Request all github user repos
	 *
	 * @param  {string} user User username
	 * @return {Promise}
	 */
	getPublicRepos() {
		return axios
			.get(`${API}/users/${USER}/repos`)
			.then((resp) => {
				const token = resp.headers[AUTH_TOKEN];
				localStorage.setItem(AUTH_TOKEN, token);

				return resp.data;
			})
			.catch((err) => {
				throw err.response;
			});
	},

	/**
	 * Request all github languages repo
	 *
	 * @param  {string} user User username
	 * @param  {string} repo Repo name
	 * @return {Promise}
	 */
	getLanguagesRepo(repo) {
		return axios
			.get(`${API}/repos/${USER}/${repo}/languages`)
			.then((resp) => {
				const token = resp.headers[AUTH_TOKEN];
				localStorage.setItem(AUTH_TOKEN, token);

				return resp.data;
			})
			.catch((err) => {
				throw err.response;
			});
	},
};
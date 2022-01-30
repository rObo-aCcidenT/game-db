import { createApp } from "vue";
import { createStore } from "vuex";
import App from './App.vue';
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const store = createStore({
	state:{
		games:[]
	},
	mutations:{
		addGames(state,gamename){
			function get_info(g_name){
			const axios=require('axios');
			const url="https://gamedb-api.herokuapp.com/";
			const config={
					headers:{
						'Content-Type':'application/json'
					}
				};
			let data=JSON.stringify({gname:g_name});
			axios.post(url,data,config).then(res=>add_game(res.data.games)).catch(err=>console.log(err));
			}
			function add_game(games){
				if(games[0].name==""){
					games=[{name:"No games were found.Please try refining your search",summary:""}]
				}
				state.games=games;
			}
			get_info(gamename);
		}
	}
});
const app = createApp(App);
app.use(store);
app.use(BootstrapVue3);
app.mount("#app");

<template>
	<div class="mb-3" v-if="games.length>0">
		<div class="d-flex flex-row">
			<div v-for="game in games" :key="game.name">
				<b-card class="mb-auto mw-25">
					<b-card-header class="card-head" header-tag="header">
						{{game.name}}
					</b-card-header>
					<b-card-body class="card-body">
						<b-card-text>{{game.summary}}</b-card-text>
					</b-card-body>
				</b-card>	
			</div>
		</div>	
	</div>
	<div v-else>
		<img class="controller-logo" src="../assets/logo.svg" alt="logo">
	</div>
</template>
<script>
import {mapState} from "vuex";
export default { 
	name:'GbTable',
	computed:mapState({
		games: state=>state.games,
	}),
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
#gb-table{
	margin:5%;
}
.card{
	margin:2%;
	background-color:#282a36;
	border:solid 3px #44475a;
	color:#8be9fd;
	border-radius: 5%;
}
.card-head{
	color: #bd93f9;
	font-family: 'Source Code Pro', monospace;
	font-size: 3vh;
}
.card-body{
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight:400;
}
.controller-logo{
	height: 20%;
	width: 20%;
}
</style>
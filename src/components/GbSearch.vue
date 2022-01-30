<template>
	<div class="d-flex flex-column justify-content-center mt-5 mb-3">
		<div>
		<p class="mb-4 discription" style="text-align:center">This webpage provides info on released and upcoming games.</p>
		</div>	
		<div class ="search-box d-flex justify-content-center">
			<b-form-input class ="w-25 text-center" id="seachbox" type="search" placeholder="search game name" v-model="gname"/>
		</div>
		<!-- <div class ="search-box">
		<label  for="searchbox">Search game name</label>
		</div> -->
		<div>
		<b-button class="btn btn-raised shadow" v-model:pressed="buttonToggle" v-on:click="addGames(gname)" type="button">submit</b-button>
		</div>
	</div>
</template>
<script>

import { mapMutations } from 'vuex';
export default{
	name:'GbSearch',
	methods:mapMutations(["addGames"]),
};
</script>
<style scoped>
	.search-box{
		margin: 2%;
	}
	.discription{
		color:#8be9fd;
		font-size: 3vh;
		font-family: 'Source Code Pro', monospace;
	}
	.form-control{
		border: solid 2px #8be9fd;
		background-color: #282a36;		
		color: #8be9fd;
	}
	.form-control:focus{
			background-color: #282a36;
			color: #8be9fd;
			border-color:#bd93f9;
	}
	.btn{
		background-color:#282a36;
		border: solid 2px;
		color:#bd93f9;
		width: 10%;
		margin-bottom: 1%;
	}
	.btn:focus{
		background-color:#282a36;
		border: solid 2px;
		color:#bd93f9;
	}
	.btn:hover{
		background-color:#282a36;
		border: solid 2px;
		color:#50fa7b;
	}
</style>

<template>
	<div class="names">
		<h3>{{ props.firstName }}</h3>
		<p>&</p>
		<h3>{{ props.crushName }}</h3>
	</div>
	<progress :value="rate" :max="100"></progress>
	<h1>{{ rate }}%</h1>
	<button @click="router.back()">Go back</button>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps(['firstName', 'crushName'])
const rate = ref(0)
const randomNumber = Math.random() * 80 + 20

const progressRate = () => {
	for (let i = 0; i < randomNumber; i++) {
		setTimeout(() => {
			rate.value++
		}, 80 * i)
	}
}

progressRate()
</script>

<style scoped>
.names {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 75%;
	margin: auto;
}
progress {
	background-color: rgba(105, 19, 71, 0.3);
	width: 75%;
	height: 20px;
	border: none;
	border-radius: 10px;
	box-shadow: 0px 0px 3px rgba(105, 19, 71, 0.5);
}
progress::-webkit-progress-value {
	background-color: rgb(172, 16, 99);
}
progress::-moz-progress-bar {
	background-color: rgb(172, 16, 99);
}
</style>

<script setup>
import { ref } from 'vue'
import db from '../firebase/init'
import { collection, addDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'

const firstName = ref('')
const crushName = ref('')
const router = useRouter()

const handleSubmit = async () => {
	const colRef = collection(db, 'names')
	const docRef = await addDoc(colRef, {
		firstName: firstName.value,
		crushName: crushName.value,
	})
	router.push({
		name: 'result',
		params: { firstName: firstName.value, crushName: crushName.value },
	})
}
</script>

<template>
	<p>
		Welcome to love meter!<br />enter your name and your crushs' to see how
		much you love each other! :)
	</p>
	<form @submit.prevent="handleSubmit">
		<div class="field">
			<label>Your name:</label>
			<input v-model="firstName" type="text" />
		</div>
		<div class="field">
			<label>Crushs name:</label>
			<input v-model="crushName" type="text" />
		</div>
		<button :disabled="!firstName || !crushName">Calculate</button>
	</form>
</template>

<style>
form {
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.field {
	margin-bottom: 20px;
}
label {
	text-align: start;
	display: block;
}
input {
	display: block;
	background: rgba(105, 19, 71, 0.3);
	border: none;
	border-radius: 5px;
	padding: 5px;
	box-shadow: 0 0 5px rgba(105, 19, 71, 0.3);
}
button {
	width: 100%;
	padding: 10px;
	margin-top: 20px;
	background-color: rgb(172, 16, 99);
	color: white;
	border: none;
	border-radius: 10px;
}
button:disabled {
	background-color: rgb(105, 78, 88);
	cursor: not-allowed;
}
</style>

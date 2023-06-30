<script setup></script>

<template>
	<div class="container">
		<header class="title">
			<h1>Love Meter</h1>
		</header>
		<RouterView />
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
* {
	font-family: 'Poppins', Arial;
}
body {
	background: pink;
	background-image: url('./assets/heart.png');
	background-size: 50px;
	background-repeat: repeat;
	background-position: center;
	background-attachment: fixed;
	background-blend-mode: soft-light;
	margin: 0;
}
#app {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
.container {
	max-width: 50%;
	width: 50%;
	background-color: rgba(200, 200, 200, 0.15);
	backdrop-filter: blur(8px);
	text-align: center;
	border-radius: 20px;
	padding: 20px;
	margin: 20px;
	box-shadow: 0 0 20px rgba(100, 100, 100, 0.5);
}
@media only screen and (max-width: 600px) {
	.container {
		max-width: none;
		width: 100%;
	}
}
.title h1 {
	font-family: 'Lobster', Arial;
	font-size: 2.5em;
}
</style>

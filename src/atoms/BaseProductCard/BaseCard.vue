<template>
	<div class="card">
		<slot name="top">header</slot>
		<slot name="middle-portion">Middle</slot>
		<slot name="bottom-portion">Add On</slot>
	</div>
</template>

<style lang="scss" scoped>
.card {
	overflow: hidden;
	border-radius: 12px;
	box-shadow: 0 4px 15px 8px rgba(109, 131, 172, 0.25);
	background-color: #ffffff;
	width: 100%;
}
</style>

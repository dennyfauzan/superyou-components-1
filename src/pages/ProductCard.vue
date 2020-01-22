<template>
	<div id="product-card">
		<div class="card_container">
			<!-- PASS DATA AS PROPS TO THIS COMPONENT -->
			<ResultCard 
				title="Informasi produk"
			/>
		</div>
	</div>
</template>

<script>
import ResultCard from "@/components/product-card/ResultCard.vue";

export default {
	name: "Card",
	data() {
		return {};
	},
	components: {
		ResultCard
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
#product-card {
	max-width: 1280px;
	margin: 30px auto 0;
	padding: 0 10px;
	background-color: #00aaae;

	.card_container {
		max-width: 430px;
		margin: 0 auto;
		background-color: #00aaae;
	}
}
</style>

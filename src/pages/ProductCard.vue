<template>
	<div id="product-card">
		<div class="card_container">
			<!-- PASS DATA AS PROPS TO THIS COMPONENT -->
			<template v-if="products">
				<ResultCard 
					:basicProducts="products"
				/>
			</template>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import ResultCard from "@/components/product-card/ResultCard.vue";

export default {
	name: "Card",
	data() {
		return {
			products: null
		};
	},
	components: {
		ResultCard
	},
	methods: {
		async getProduct(){
			this.products = await axios
        .get('https://api.superyou.co.id/api/v1/products?dob=25')
        .then(response => response.data.data)
    }
	},
	mounted() {
		this.getProduct();
	}
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

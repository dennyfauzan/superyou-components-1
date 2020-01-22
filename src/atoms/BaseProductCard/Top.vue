<template>
	<div class="top-portion">
		<div class="name-payment">
			<div class="icon-container">
				<img
					src="https://superyou.co.id/img/icons/prod-umbrella.svg"
					alt="umbrella"
				/>
				<img
					class="badge"
					src="https://superyou.co.id/img/icons/badge-gold.svg"
					alt="badge"
				/>
			</div>
			<div class="name-container">
				<p>Super Safe Protection</p>
				<h2 class="half">Silver Plan</h2>
			</div>
		</div>
		<div class="total-payment">
			<p>Biaya Premi</p>
			<h2 class="half">Rp 143.500</h2>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/styles/helper/_mixin.scss";
.top-portion {
	display: table;
	width: 100%;
	background-color: #0d294a;
	color: white;
	padding: 5px 15px;
	.name-payment {
		display: table-cell;

		.icon-container {
			width: 40px;
			height: 50px;
			display: table-cell;
			flex-direction: column;
			justify-content: center;
			position: relative;
			float: left;

			img {
				height: 100%;
				width: 100%;
			}

			.badge {
				position: absolute;
				bottom: 0;
				right: 0;
				width: 15px;
				top: 20%;
			}
		}

		.name-container {
			padding-left: 50px;
			padding-top: 5px;
			> * {
				margin: 0;
			}
			p {
				margin-bottom: 6px;
				font-size: 12px;
				@include mobile {
					font-size: 10px;
				}
			}

			h2.half {
				font-size: 20px;
				@include mobile {
					font-size: 15px;
				}
			}

			h2.p-half {
				font-size: 18px;
				@include mobile {
					font-size: 15px !important;
				}
			}
		}

		@include sGrid {
			.icon-container {
				width: 60px;
				height: 70px;

				.badge {
					right: 3px;
					width: 20px;
				}
			}

			.name-container {
				padding-left: 70px;
				padding-top: 10px;

				h2.half {
					font-size: 26px;
				}

				h2.p-half {
					font-size: 2.2rem;
				}
			}
		}
	}
	.total-payment {
		display: table-cell;
		text-align: right;
		padding-top: 0.5rem;

		> * {
			margin: 0;
		}

		p {
			margin-bottom: 6px;
			font-size: 12px;
			@include mobile {
				font-size: 10px;
			}
		}

		h2.half {
			font-size: 26px;
			@include mobile {
				font-size: 15px !important;
			}
		}

		h2.p-half {
			font-size: 18px;
			@include mobile {
				font-size: 15px !important;
			}
		}

		/*@include sGrid {
			width: 15rem;
			padding-top: 10px;

			h2.half {
				font-size: 26px;
			}

			h2.p-half {
				font-size: 2.2rem;
			}
		}*/
	}
}
</style>

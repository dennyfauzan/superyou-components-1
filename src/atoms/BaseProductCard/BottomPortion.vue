<template>
  <div class="bottom-portion">
    <ul>
      <li>
        <div class="select-content selected" @click="toggleDetailRider(0)">
          <div class="protection-name casual">
            <img
              src="https://superyou.co.id/storage/products/plans/vWAjsMebTrVCGW6pKhJFYE0sgomXrGNs2luN7p7w.svg"
            />
            <p>Super Motor Protection</p>
          </div>
          <h3 class="protection-price">Rp. 9500</h3>
          <a class="toggle-detail" :class="{ rotate: toggle[0] }">a</a>
				</div>
				<transition name="slide-fade">
					<div class="detail-content" v-if="toggle[0]">
						<div class="full-block">
							<p>
								Tambahan perlindungan biaya medis untuk operasi gigi, patah tulang,
								dan koma akibat kecelakaan sepeda motor
							</p>
							<h3>10 Juta</h3>
						</div>
					</div>
				</transition>
      </li>
      <li>
        <div class="select-content selected" @click="toggleDetailRider(1)">
          <div class="protection-name casual">
            <img
              src="https://superyou.co.id/storage/products/plans/q6osdJiJcS932Lg1unz1eOnAP8w4wbt3teO0mcW7.svg"
            />
            <p>Super Holiday Protection</p>
          </div>
          <h3 class="protection-price">Rp. 9500</h3>
          <a class="toggle-detail" :class="{ rotate: toggle[1] }">a</a>
				</div>
				<transition name="slide-fade">
					<div class="detail-content" v-if="toggle[1]">
						<div class="full-block">
							<p>
								Tambahan perlindungan biaya medis untuk operasi gigi, patah tulang,
								dan koma akibat kecelakaan sepeda motor
							</p>
							<h3>10 Juta</h3>
						</div>
					</div>
				</transition>
			</li>
    </ul>
    <div class="form-group">
      <p>
        * Asuransi Super Motor Protection dan Super Holiday Protection hanya
        dapat dibeli bersamaan dengan asuransi Super Safe Protection
      </p>
      <p>* Syarat dan ketentuan berlaku</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomPortion",
	props: {},
	data: function() {
    return {
			toggle: {
				0: false,
				1: false
			}
		}
	},
	methods: {
		toggleDetailRider(id) {
			this.toggle[id] = !this.toggle[id];
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/styles/helper/_mixin.scss";
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(0);
  opacity: 0;
}
.bottom-portion {
  ul {
    margin: 0.3rem 0;
    padding: 0;
    li {
      list-style-type: none;
      padding-bottom: 0.4rem;
    }
  }

  .select-content {
    background-color: #cbd4dd;
    padding: 1.5rem;
    width: 100%;
    display: table;
    color: #0d294a;
    position: relative;
    opacity: 0.4;
    @include mobile {
      padding: 1rem 1.5rem;
    }

    @include sGrid {
      padding: 1.5rem 2rem;
    }

    &.selected {
      background-color: #0d294a;
      color: white;
      opacity: 1;

      .protection-name {
        p {
          margin: 0;
        }
        &.casual {
          img {
            -webkit-filter: grayscale(0%);
            filter: grayscale(0%);
          }
        }
      }

      .toggle-detail {
        background: url(https://superyou.co.id/img/icons/caret-down-white.svg)
          center center no-repeat;
				&.rotate {
					transform: rotate(180deg) !important;
					transition: 0.3s transform ease-in-out !important;
				}
      }
    }

    .protection-name {
      display: table-cell;
      padding-right: 0.5rem;
      position: relative;
      font-size: 1.2rem;
      vertical-align: middle;

      &.casual {
        img {
          width: 3rem;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);

          -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
          @include mobile {
            width: 2.5rem;
          }
        }

        p {
          padding-left: 4rem;
          @include mobile {
            font-size: 1rem;
          }
        }
      }
    }

    .protection-price {
      width: 15rem;
      display: table-cell;
      vertical-align: middle;
      padding: 0 2.5rem 0 0.5rem;
      text-align: right;
      cursor: pointer;
      font-size: 2rem;
      @include mobile {
        width: 11rem !important;
        font-size: 1.4rem;
      }
    }

    .toggle-detail {
      position: absolute;
      right: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0;
      letter-spacing: 0;
      color: transparent;
      width: 1.5rem;
      height: 1.5rem;
      background: url(https://superyou.co.id/img/icons/caret-down-white.svg)
        center center no-repeat;
      transition: transform 0.2s ease-in;
      pointer-events: none;

      @include sGrid {
        right: 2rem;
      }
    }
  }

	.blocked {
		display: inline-block !important;
	}

  .detail-content {
    display: table;
    width: 100%;
    padding: 1.5rem;
    padding: 1rem 1.5rem .5rem;
    color: #708697;

		p {
      display: table-cell;
      padding-right: 0.5rem;
      font-size: 1.2rem;
      line-height: 1.5;
    }

    h3 {
      width: 30%;
      display: table-cell;
      vertical-align: middle;
      padding: 0 0 0 0.5rem;
      text-align: right;
      color: #0d294a;
      font-size: 2rem;
    }

    @include sGrid {
      h3 {
        width: 15rem;
      }
    }

		.full-block {
			padding-bottom: .5rem;
			@include mobile {
				p {
					font-size: 1rem;
					line-height: 1.5;
				}
				h3 {
					font-size: 1.5rem;
				}
			}
		}
  }

  .form-group {
    padding: 0 1.5rem;
    p {
      font-size: 1rem;
      color: #708697;
      display: block;
      line-height: 1.5;
    }
  }
}
</style>

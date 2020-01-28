<template>
  <div class="bottom-portion">
    <ul>
      <template v-if="rider">
        <li v-for="addOn in rider" :key="addOn.id">
          <div
            :class="[
              'select-content',
              { selected: activeRider.includes(addOn.id) }
            ]"
          >
            <div class="checkbox_wrapper">
              <input
                type="checkbox"
                :id="addOn.id"
                :value="addOn.id"
                v-model="activeRider"
              />
              <label :for="addOn.id"></label>
            </div>
            <div class="protection-name casual" @click="selectRider(addOn.id)">
              <img :src="`https://superyou.co.id/storage/${addOn.icon}`" />
              <p>{{ addOn.product }}</p>
            </div>
            <h3 class="protection-price" @click="toggleDetailRider(addOn.id)">
              Rp. {{ addOn.start_from }}
            </h3>
            <a
              class="toggle-detail"
              :class="{ rotate: toggle.includes(addOn.id) }"
              >a</a
            >
          </div>
          <div class="detail-content" v-if="toggle.includes(addOn.id)">
            <div
              class="full-block"
              v-for="benefit in addOn.benefits"
              :key="benefit.id"
            >
              <p>
                {{ benefit.benefit }}
              </p>
              <h3>{{ benefit.value | billion }}</h3>
            </div>
          </div>
        </li>
      </template>
    </ul>

    <div class="form-group" v-if="basic.id == 3">
      <p>
        * Asuransi Super Motor Protection dan Super Holiday Protection hanya
        dapat dibeli bersamaan dengan asuransi Super Safe Protection
      </p>
      <p>* Syarat dan ketentuan berlaku</p>
    </div>
    <div class="form-group" v-else-if="basic.id == 2">
      <p>
        Manfaat meninggal dunia dalam masa pertanggungan asuransi akibat
        serangan jantung, stroke, diabetes, sirosis, kanker, gagal ginjal, atau
        HIV/AIDS
      </p>
    </div>
    <div class="form-group" v-else>
      <p>
        * Kehilangan anggota tubuh secara permanen, meliputi kehilangan 2 (dua)
        kaki atau 2 (dua) lengan, 1 (satu) kaki dan 1 (satu) lengan, atau
        kehilangan fungsi penglihatan secara permanen
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomPortion",
  props: ["rider", "basic"],
  components: {},
  data: function() {
    return {
      toggle: [],
      activeRider: []
    };
  },
  methods: {
    toggleDetailRider(val) {
      for (var i = 0; i < this.toggle.length; i++) {
        if (this.toggle[i] === val) {
          this.toggle.splice(i, 1);
          return true;
        }
      }
      this.toggle.push(val);
    },
    selectRider(val) {
      for (var i = 0; i < this.activeRider.length; i++) {
        if (this.activeRider[i] === val) {
          this.activeRider.splice(i, 1);
          return true;
        }
      }
      this.activeRider.push(val);
    }
  },
  computed: {
    calculateTotalAddOn() {
      let sum = 0;
      if (this.activeRider.length) {
        this.rider.forEach(rider => {
          this.activeRider.includes(rider.id)
            ? (sum += parseFloat(rider.start_from))
            : null;
        });
      }
      return sum;
    }
  },
  watch: {
    activeRider(newVal) {
      this.$emit("calculateTotalPremi", this.calculateTotalAddOn, newVal);
    }
	},
	filters: {
		billion: function(value) {
			var divided = 0;
			let langUrl = `${window.location.pathname}/`;
			let getLang = langUrl.includes("/en/") ? "en" : "id";
			let moneyWording = {
					id: {
							thousand: "Ribu",
							million: "Juta",
							billion: "Miliar"
					},
					en: {
							thousand: "Thousand",
							million: "Mio",
							billion: "Bio"
					}
			};

			// var moneyFormatdivided = "";
			divided = Math.round(value / 1000);
			if (divided > 0 && divided < 1000) {
					// value = divided;
					value = `${divided} ${moneyWording[getLang].thousand}`;
			} else if (divided >= 1000 && divided < 1000000) {
					// value = Math.round(divided / 1000);
					let perThousand = Math.round(divided / 1000);
					value = `${perThousand} ${moneyWording[getLang].million}`;
			} else if (divided >= 1000000 && divided < 100000000) {
					// value = Math.round(divided / 1000000);
					let perMio = Math.round(divided / 1000000);
					value = `${perMio} ${moneyWording[getLang].billion}`;
			}

			value = "" + value;

			return value;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/styles/helper/_mixin.scss";
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
    padding: 1rem 1.5rem;
    width: 100%;
    display: table;
    color: #0d294a;
    position: relative;
    opacity: 0.4;
    margin-top: auto !important;

    > * {
      display: table-cell;
    }

    &.selected {
      background-color: #0d294a;
      color: white;
      opacity: 1;
      .protection-name {
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
      }
    }

    .protection-name {
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
      background: url(https://superyou.co.id/img/icons/caret-down-darkblue.svg)
        center center no-repeat;
      transition: 0.4s transform ease-in-out;
      pointer-events: none;
      &.rotate {
        -webkit-transform: translateY(-50%) rotateX(180deg);
        transform: translateY(-50%) rotateX(180deg);
      }
      @include sGrid {
        right: 2rem;
      }
    }

    .checkbox_wrapper {
      display: table-cell;
      vertical-align: middle;
      cursor: pointer;
      position: relative;
      & > input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      & > label {
        position: relative;
        padding-left: 20px;
        &::before {
          content: "";
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          width: 1.8rem;
          height: 1.8rem;
          -webkit-box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.3);
          box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          text-align: center;
          background-color: #fff;
        }
      }
      input[type="checkbox"]:checked + label:before {
        content: url(https://superyou.co.id/img/icons/check-darkblue.svg);
      }
    }
  }

  .detail-content {
    display: table;
    width: 100%;
    padding: 1.5rem;
    padding: 1rem 1.5rem 0.5rem;
    color: #708697;
    opacity: 0.4;

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

    .full-block {
      padding-bottom: 0.5rem;
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
    border-top: 1px solid #cfd8e1;
    margin: 0 1.5rem;
    p {
      font-size: 1rem;
      color: #708697;
      display: block;
      line-height: 1.5;
    }
  }
}
</style>

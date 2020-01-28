<template>
  <div class="middle-portion">
    <ul>
      <li class="bbottom">
        <p>Uang pertanggungan</p>
        <h3>{{ middle.sum_assured | billion }}</h3>
      </li>
      <li v-for="benefit in middle.benefits" :key="benefit.id">
        <p>{{ benefit.benefit }}</p>
        <h3>{{ benefit.value | billion }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MiddlePortion",
	props: ["middle"],
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
.middle-portion {
  padding: 0 1.5rem 1.5rem;
  display: table;
  color: #708697;
	line-height: 1.5;
	width: 100%;
  @include mobile {
    padding: 0 1.5rem;
  }

  .bbottom {
    border-bottom: 1px solid #cfd8e1;
    padding-bottom: 1.2rem;
  }

  ul {
    width: 100%;
    padding: 0;
    padding-bottom: 1.5rem;
    display: table-row;
    @include mobile {
      padding-bottom: 1px;
    }

    li {
      padding-top: 0.8rem;
      display: table;
      width: 100%;
      @include mobile {
        padding: 0.7rem 0;
      }

      p {
        display: table-cell;
        vertical-align: middle;
        padding-right: 0.5rem;
        font-size: 1.2rem;
        @include mobile {
          vertical-align: middle;
          font-size: 1rem;
        }
      }

      h3 {
        width: 30%;
        display: table-cell;
        vertical-align: middle;
        padding: 0 0 0 5px;
        text-align: right;
        color: #0d294a;
        font-size: 20px;
        @include mobile {
          font-size: 15px;
        }
      }
    }
  }
}
</style>

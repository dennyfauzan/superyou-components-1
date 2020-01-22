<template>
  <div class="middle-portion">
    <ul>
      <li class="bbottom">
        <p>Uang pertanggungan</p>
        <h3>500 Juta</h3>
      </li>
      <!-- <li>Manfaat</li> -->
      <li>
        <p>Perlindungan biaya medis karena kecelakaan</p>
        <h3>25 Juta</h3>
      </li>
      <li>
        <p>
          Pertanggungan tutup usia/ perlindungan cacat total dan tetap karena
          kecelakaan
        </p>
        <h3>500 Juta</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MiddlePortion",
  props: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/helper/_mixin.scss";
.middle-portion {
  padding: 0 1.5rem 1.5rem;
  display: table;
  color: #708697;
  line-height: 1.5;
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
      padding-top: .8rem;
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

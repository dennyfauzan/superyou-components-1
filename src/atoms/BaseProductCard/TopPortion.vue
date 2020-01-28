<template>
  <div class="top-portion">
    <div class="name-payment">
      <div class="icon-container">
        <img
          :src="`https://superyou.co.id/storage/${basic.icon}`"
          :alt="`${basic.name}`"
        />
        <img
          class="badge"
          :src="`https://superyou.co.id/storage/${top.badge}`"
          :alt="`${basic.name}`"
        />
      </div>
      <div class="name-container">
        <p>{{ basic.name }}</p>
        <h2 class="half">{{ top.name }}</h2>
      </div>
    </div>
    <div class="total-payment">
      <p>Biaya Premi</p>
      <h2 class="half">{{ totalPremi | moneyFormat }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPortion",
  props: {
    basic: {
      type: Object
    },
    top: {
      type: Object
    },
    total: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalPremi() {
      return this.total + this.top.startForm;
    }
  },
  filters: {
    moneyFormat: function(value) {
      value = "" + value;

      return (
        "Rp " +
        parseFloat(value.replace(/,/g, ""))
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      );
		}
  }
};
</script>

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
        margin-bottom: 4px;
        font-size: 12px;
        @include mobile {
          font-size: 10px;
        }
      }
      h2.half {
        font-size: 2rem;
        @include mobile {
          font-size: 1.5rem;
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
      margin-bottom: 4px;
      font-size: 12px;
      @include mobile {
        font-size: 10px;
      }
    }

    h2.half {
      font-size: 2.2rem;
      @include mobile {
        font-size: 1.5rem !important;
      }
    }
  }
}
</style>

<template>
  <div id="su-base-select">
    <label :class="{ active: isFocused }">Status Tertanggung</label>
    <v-select
      class="base-select"
      :options="options"
      :searchable="false"
      :selectable="option => option.val !== 'INA'"
      @input="onSelectOption"
      @search:focus="onFocus"
      @search:blur="onBlur"
    ></v-select>
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  name: "BaseSelect",
  data() {
    return {
      selectedData: null,
      isFocused: false
    };
  },
  components: {
    vSelect
  },
  props: {
    options: {
      type: Array,
      default: function() {
        return [
          { label: "Indonesia", val: "INA" },
          { label: "Canada", val: "CA" },
          { label: "Australia", val: "AUS" }
        ];
      }
    }
  },
  methods: {
    onSelectOption(selectedData) {
      if (selectedData) {
        this.selectedData = selectedData;
      }
    },
    onFocus() {
      this.isFocused = true;
    },
    onBlur() {
      this.isFocused = false;
    }
  }
};
</script>

<style lang="scss">
#su-base-select {
  label {
    color: #708697;
    font-size: 14px;
    &.active {
      color: #00aaae;
    }
  }
  .base-select {
    .vs__dropdown-toggle {
      border: none;
      border-radius: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);

      .vs__selected-options {
        padding-left: 0;
        .vs__selected {
          padding-left: 0;
          margin: 10px 2px 4px 0;
          font-size: 16px;
        }
        .vs__search {
          font-size: 16px;
          color: #0d294a;
          padding-bottom: 4px;
        }
      }

      .vs__actions {
        .vs__open-indicator {
          fill: #0d294a;
          transform: scale(0.85);
        }
      }
    }
    .vs__dropdown-menu {
      .vs__dropdown-option {
        font-size: 16px;
        &--highlight {
          background-color: #00aaae;
        }
      }
      .vs__no-options {
        font-size: 16px;
        color: #708697;
      }
    }
  }
}
</style>

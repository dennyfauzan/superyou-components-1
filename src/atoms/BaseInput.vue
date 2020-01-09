<template>
  <div class="su-input" :class="{ 'with-note': note }">
    <div class="su-input_control" :class="{ 'is-focused': isFocused }">
      <label class="su-input_label">
        {{ label }}
        <input
          :type="type"
          :name="name"
          @keypress="expectedCharacters($event)"
          :value="value"
          class="su-input_text"
          @focus="isFocused = true"
          @blur="onInputBlur"
          @input="onInputChange($event)"
        />
      </label>

      <span v-if="isError" class="su-input_error message"
        >Nama tidak valid</span
      >
      <span v-else class="su-input_note message">{{ note }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  data() {
    return {
      isFocused: false,
      isError: false
    };
  },
  props: {
    value: String,
    name: String,
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: null
    },
    note: {
      type: String,
      default: null
    },
    char: {
      type: String,
      default: null
    }
  },
  methods: {
    onInputBlur() {
      this.isFocused = false;
    },
    onInputChange(e) {
      this.$emit("handleChange", e.target.value, e.target.getAttribute("name"));
    },
    expectedCharacters(e) {
      console.log(typeof e.which == "number");
      const val = e.key;
      const rgx = new RegExp(this.char);
      if (rgx.test(val)) {
        return true;
      } else {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }
};
</script>

<style lang="scss">
.su-input {
  position: relative;
  margin-bottom: 25px;
  &.with-note {
    margin-bottom: 40px;
  }
  &_control {
    &::before {
      bottom: -1px;
      content: "";
      left: 0;
      position: absolute;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      width: 100%;

      border-style: solid;
      border-width: thin 0 0 0;
      border-color: rgba(0, 0, 0, 0.3);
    }

    &::after {
      bottom: -1px;
      content: "";
      left: 0;
      position: absolute;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      width: 100%;

      border-style: solid;
      border-width: thin 0 thin 0;
      border-color: #00aaae;
      transform: scaleX(0);
    }

    &.is-focused {
      &::after {
        transform: scaleX(1);
      }
      .su-input_label {
        color: #00aaae;
      }
    }

    .su-input_label {
      color: #708697;
      font-size: 12px;
    }

    .su-input_text {
      flex: 1 1 auto;
      line-height: 20px;
      padding: 8px 0 8px;
      max-width: 100%;
      min-width: 0px;
      width: 100%;
      background-color: transparent;
      border-style: none;

      color: #0d294a;
      font-size: 14px;

      &:focus {
        outline: none;
      }
    }

    .message {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -20px;
      font-size: 9px;
      &.su-input_error {
        color: red;
      }
      &.su-input_note {
        color: #0d294a;
      }
    }
  }
}
</style>

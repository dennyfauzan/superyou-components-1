<template>
  <div class="su-input" :class="{ 'with-note': note }">
    <div class="su-input_control" :class="{ 'is-focused': isFocused }">
      <label class="su-input_label">
        {{ label }}
        <input
          :type="inputType"
          :name="name"
          :value="value"
          autocomplete="off"
          class="su-input_text"
          @focus="onInputFocus"
          @blur="onInputBlur"
          @beforeinput="expectedCharacters($event)"
          @input="onInputChange($event)"
        />
      </label>

      <span v-if="isError" class="su-input_error message">{{ errorMessage }}</span>
      <span v-else class="su-input_note message">{{ note }}</span>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "BaseInput",
  data() {
    return {
      isFocused: false,
      isError: false,
      isReadOnly: false,
      errorMessage: null
    };
  },
  props: {
    value: String,
    name: String,
    inputType: {
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
    },
    maxLength: {
      type: Number,
      default: null
    },
    minLength: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onInputBlur() {
      this.isFocused = false;
      if (this.checkMinLength()) {
        this.errorMessage = `Minimal ${this.minLength} karakter`;
        this.isError = true;
      } else {
        this.errorMessage = "";
        this.isError = false;
      }
    },
    onInputFocus() {
      this.isFocused = true;
    },
    onInputChange(e) {
      this.$emit("handleChange", e.target.value, e.target.getAttribute("name"));
    },
    expectedCharacters(e) {
      this.checkMaxLength(e);
      this.checkCharRegexMatch(e);
      return true;
    },
    checkMaxLength(e) {
      if (
        this.maxLength &&
        e.target.value.length >= this.maxLength &&
        e.inputType !== "deleteContentBackward"
      ) {
        e.preventDefault();
        return false;
      }
    },
    checkMinLength() {
      let length = this.value ? this.value.length : 0;
      return this.minLength > length;
    },
    checkCharRegexMatch(e) {
      if (!this.char) return;

      const rgx = new RegExp(this.char);
      if (rgx.test(e.data) || e.inputType === "deleteContentBackward") {
        return true;
      }
      e.preventDefault();
      return false;
    }
  }
};
</script>

<style lang="scss">
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
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

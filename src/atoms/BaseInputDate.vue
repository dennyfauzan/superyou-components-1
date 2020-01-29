<template>
  <div class="su-date-wrapper">
    <label :class="{ 'date-focused': isFocused, 'is-error': isError }">{{
      label
    }}</label>
    <div
      class="su-date"
      :class="{ 'date-focused': isFocused, 'is-error': isError }"
      @keyup.capture="updateValue"
      @focus.capture="onFocused"
      @blur.capture="onBlured"
    >
      <input
        v-if="showDay"
        ref="day"
        v-model="day"
        class="su-date__input su-date__input--day"
        type="tel"
        placeholder="dd"
        @input="updateDay"
        @blur="eachBlur('day', 2)"
      />
      <span v-if="showDay && showMonth" class="su-date__divider">/</span>
      <input
        v-if="showMonth"
        ref="month"
        v-model="month"
        class="su-date__input su-date__input--month"
        type="tel"
        placeholder="mm"
        @input="updateMonth"
        @blur="eachBlur('month', 2)"
        @focus="eachFocus('month')"
      />
      <span v-if="showYear && (showDay || showMonth)" class="su-date__divider"
        >/</span
      >
      <input
        v-if="showYear"
        ref="year"
        v-model="year"
        class="su-date__input su-date__input--year"
        type="tel"
        placeholder="yyyy"
        @input="updateYear"
        @blur="eachBlur('year', 4)"
        @focus="eachFocus('year')"
        @beforeinput="beforeInputYear"
      />
    </div>
    <span v-if="isError" class="su-input_error message">{{
      errorMessage
    }}</span>
    <span v-else class="su-input_note message">{{ note }}</span>
  </div>
</template>

<script>
export default {
  name: `BaseInputDate`,
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    showDay: {
      type: Boolean,
      default: true
    },
    showMonth: {
      type: Boolean,
      default: true
    },
    showYear: {
      type: Boolean,
      default: true
    },
    note: {
      type: String
    },
    minAge: {
      type: Number
    },
    maxAge: {
      type: Number
    },
    label: {
      type: String
    },
    name: {
      type: String
    },
    error: {
      type: Boolean
    },
    errMsg: {
      type: String
    }
  },
  data() {
    return {
      day: `${this.value ? new Date(this.value).getDate() : ``}`,
      month: `${this.value ? new Date(this.value).getMonth() + 1 : ``}`,
      year: `${this.value ? new Date(this.value).getFullYear() : ``}`,
      isFocused: false,
      isError: false,
      errorMessage: "",
      dateFlag: {
        day: 0,
        month: 0,
        year: 0
      }
    };
  },
  watch: {
    year(current, prev) {
      if (current > 9999) this.year = prev;
    },
    submittedDate() {
      console.log("data change");
      this.isError = false;
      this.errorMessage = "";

      if (this.dateFlag.day && this.dateFlag.month && this.dateFlag.year) {
        if (!this.checkValidDate()) {
          this.isError = true;
          this.errorMessage = "Tanggal tidak valid";
          return false;
        }

        if (this.minAge && !this.validateMinMaxYear(this.minAge)) {
          this.isError = true;
          this.errorMessage = `Minimal ${this.minAge} tahun ke atas`;
        }

        if (this.maxAge && this.validateMinMaxYear(this.maxAge)) {
          this.isError = true;
          this.errorMessage = `Maksimal ${this.maxAge} tahun ke atas`;
        }
      }
    },
    error(status) {
      console.log("changed error");
      this.isError = status;
      this.errorMessage = this.errMsg;
    }
  },
  methods: {
    updateDay() {
      if (this.day && this.day.length >= 2) {
        this.$refs.month.select();
      }
      if (this.day > 31) {
        this.day = "31";
      }
      if (!this.day.length || parseInt(this.day, 10) < 4) return;
      if (this.showMonth) this.$refs.month.select();
      else if (this.showYear) this.$refs.year.select();
    },
    updateMonth() {
      if (this.month && this.month.length >= 2) {
        this.$refs.year.select();
      }
      if (this.month > 12) {
        this.month = "12";
      }
      if (!this.month.length || parseInt(this.month, 10) < 2) return;
      if (this.showYear) this.$refs.year.select();
    },
    updateYear() {
      // check first digit in year must be start with "1" or "2"
      if (!["1", "2"].includes(this.year[0]) && this.year.length < 2) {
        this.year = "";
      }
    },
    updateValue() {
      const timestamp = Date.parse(
        `${this.year.padStart(4, 0)}-${this.month}-${this.day}`
      );
      if (Number.isNaN(timestamp)) return;
      this.$emit(`input`, timestamp, this.name);
    },
    checkValidDate() {
      const timestamp = Date.parse(
        `${this.year.padStart(4, 0)}-${this.month}-${this.day}`
      );
      if (
        this.day.length === 2 &&
        this.month.length === 2 &&
        this.year.length === 4 &&
        timestamp
      ) {
        return true;
      }
      return false;
    },
    validateMinMaxYear(years = 0) {
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear() - years;
      const day = new Date().getDate();
      const completeDate = `${month}/${day}/${year}`;
      const dateToTime = new Date(completeDate).getTime();
      console.log(dateToTime);
      return dateToTime > this.submittedDate;
    },
    eachBlur(type, howMany) {
      if (this[type].length) {
        this[type] = this[type].padStart(howMany, 0);
        this.dateFlag[type] += 1;
      }
    },
    eachFocus(type) {
      if (type === "year") {
        if (this.month.length === 0) {
          this.$refs.month.select();
        }
      } else if (type === "month") {
        if (this.day.length === 0 && this.month.length === 0) {
          this.$refs.day.select();
          this.errorMessage = "";
          this.isError = false;
        }
      }
    },
    onFocused() {
      this.isFocused = true;
    },
    onBlured() {
      console.log(this.day.length && this.month.length && this.year.length);
      if (this.day.length && this.month.length && this.year.length) {
        this.isFocused = false;
      } else {
        this.isError = true;
        this.errorMessage = "Tanggal tidak valid";
      }
    },
    beforeInputYear(e) {
      if (this.year.length >= 4 && e.inputType !== "deleteContentBackward") {
        e.preventDefault();
      }
    }
  },
  computed: {
    submittedDate() {
      return Date.parse(
        `${this.year.padStart(4, 0)}-${this.month}-${this.day}`
      );
    }
  }
};
</script>

<style lang="scss">
.su-date-wrapper {
  label {
    display: block;
    color: #708697;
    font-size: 14px;
    margin-bottom: 2px;
    &.active {
      color: #00aaae;
    }
    &.date-focused {
      color: #00aaae;
    }
    &.is-error {
      color: red;
    }
  }
}
.su-date {
  $spacing: 0.75em;
  display: inline-flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  &::before,
  &::after {
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
    border-style: solid;
    border-width: thin 0 0 0;
  }
  &::before {
    border-color: rgba(0, 0, 0, 0.3);
  }
  &::after {
    border-color: #00aaae;
    transform: scaleX(0);
  }
  &.date-focused {
    &::after {
      transform: scaleX(1);
      border-width: thin 0 thin 0;
    }
  }
  &.is-error {
    &::after {
      border-color: red;
      transform: scaleX(1);
      border-width: thin 0 0 0;
    }
  }
  // 1. Hide the spinner button in Chrome, Safari and Firefox.
  &__input {
    padding: $spacing;
    padding-right: $spacing / 2;
    padding-left: $spacing / 4;
    padding: $spacing 0;
    border: none;
    text-align: left;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -moz-appearance: textfield; // 1
    &::-webkit-inner-spin-button {
      display: none; // 1
    }

    &:focus {
      outline: none;
    }
    &--day {
      width: 30px;
    }
    &--month {
      margin-left: 3px;
      margin-right: 3px;
      width: 40px;
      text-align: center;
    }
    &--year {
      width: 100%;
      padding-left: 10px;
    }
  }
  &__divider {
    padding-top: $spacing;
    padding-bottom: $spacing;
    /* padding: 0.75em 5px; */
    pointer-events: none;
    color: darkgray;
  }
  .message {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -20px;
    font-size: 10px;
    &.su-input_error {
      color: #e02020;
    }
    &.su-input_note {
      color: #0d294a;
    }
  }
}
</style>

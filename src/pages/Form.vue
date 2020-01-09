<template>
  <div id="form-container">
    <h1>Form</h1>
    <form>
      <base-input
        :value="userName"
        label="Nama Lengkap"
        @handleChange="handleInputChange"
        name="userName"
        note="Note: Nama Lengkap"
        char="^[A-Za-z ]+$"
      ></base-input>
      <base-input
        :value="citizenId"
        label="Nomor Kartu Indentitas"
        @handleChange="handleInputChange"
        name="citizenId"
        inputType="text"
        char="^[0-9]*$"
      ></base-input>
      <base-input
        :value="insuredName"
        label="Nama Tertanggung"
        @handleChange="handleInputChange"
        name="insuredName"
      ></base-input>
    </form>
  </div>
</template>

<script>
import BaseInput from "../atoms/BaseInput";
export default {
  name: "FormComponets",
  data() {
    return {
      userName: null,
      citizenId: null,
      insuredName: null
    };
  },
  components: {
    BaseInput
  },
  methods: {
    handleInputChange(val, name) {
      this[name] = val;
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
#form-container {
  padding-left: 25px;
  padding-right: 25px;

  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 0 10px;
  min-height: 100vh;

  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>

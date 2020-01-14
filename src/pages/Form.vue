<template>
  <div id="form-container">
    <BaseStepper :dataSteps="dataSteps" />
    <h1>Form</h1>
    <form>
      <base-input
        :value="userName"
        label="Nama Lengkap"
        @handleChange="handleInputChange"
        name="userName"
        note="Note: Nama Lengkap"
        char="^[A-Za-z ]+$"
        :min-length="6"
        required
      ></base-input>
      <base-input
        :value="citizenId"
        label="Nomor Kartu Indentitas"
        @handleChange="handleInputChange"
        name="citizenId"
        inputType="text"
        char="^[0-9]*$"
        :max-length="16"
        required
      ></base-input>
      <base-input
        :value="insuredName"
        label="Email"
        @handleChange="handleInputChange"
        name="insuredName"
        inputType="email"
        required
      ></base-input>
      <br />
      <base-select
        name="relations"
        label="Hubungan"
        :options="dataSelectOpt"
        @handleChange="handleInputChange"
      ></base-select>
      <br />
      <base-checkbox name="gender" @handleChange="handleInputChange" axis="row"></base-checkbox>
    </form>
  </div>
</template>

<script>
import BaseInput from "../atoms/BaseInput";
import BaseStepper from "../atoms/BaseStepper";
import BaseSelect from "../atoms/BaseSelect";
import BaseCheckbox from "../atoms/BaseCheckbox";

export default {
  name: "FormComponets",
  data() {
    return {
      userName: null,
      citizenId: null,
      insuredName: null,
      relations: null,
      gender: null,
      email: {
        val: null,
        isError: false,
        errorMsg: null,
        min: 4
      },
      dataSteps: [
        {
          title: "1",
          info: "Pilih Produk"
        },
        {
          title: "2",
          info: "Isi Data"
        },
        {
          title: "3",
          info: "Ringkasan Pembelian"
        },
        {
          title: "4",
          info: "Pembayaran"
        }
      ],
      dataSelectOpt: [
        { label: "Saya Sendiri", val: "self" },
        { label: "Ayah Kandung", val: "father" },
        { label: "Ibu Kandung", val: "mother" },
        { label: "Saudara Kandung", val: "brother" }
      ]
    };
  },
  components: {
    BaseInput,
    BaseStepper,
    BaseSelect,
    BaseCheckbox
  },
  methods: {
    handleInputChange(val, name) {
      this[name] = val;
    }
  }
};
</script>

<style lang="scss" scoped>
#form-container {
  padding-top: 40px;
  padding-left: 25px;
  padding-right: 25px;

  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  min-height: 100vh;

  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>

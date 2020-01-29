<template>
  <div id="form-container">
    <BaseStepper :dataSteps="dataSteps" />
    <h1>Form</h1>
    <form>
      <base-input
        :value="userName"
        label="Nama Lengkap"
        v-on:handle-change="handleInputChange"
        name="userName"
        note="Note: Nama Lengkap"
        char="^[A-Za-z ]+$"
        :min-length="6"
        required
        :error="errValidation.status"
        :err-msg="errValidation.message"
      ></base-input>
      <br />
      <base-input
        :value="citizenId"
        label="Nomor Kartu Indentitas"
        v-on:handle-change="handleInputChange"
        name="citizenId"
        inputType="tel"
        char="^[0-9]*$"
        :max-length="16"
        required
      ></base-input>
      <br />
      <base-input
        :value="insuredName"
        label="Email"
        v-on:handle-change="handleInputChange"
        name="insuredName"
        inputType="email"
        required
      ></base-input>
      <br />
      <base-select
        name="relations"
        label="Hubungan"
        :options="dataSelectOpt"
        v-on:handle-change="handleInputChange"
      ></base-select>
      <br />
      <base-checkbox-and-radio
        name="gender"
        v-on:handle-change="handleInputChange"
        axis="row"
        inputType="checkbox"
      ></base-checkbox-and-radio>
      <br />
      <base-input-date
        label="Tanggal Lahir"
        name="dob"
        :value="dob"
        :min-age="17"
        :max-age="40"
        @input="handleInputChange"
        :error="errValidation.status"
        :err-msg="errValidation.message"
      ></base-input-date>
    </form>
  </div>
</template>

<script>
import BaseInput from "../atoms/BaseInput";
import BaseStepper from "../atoms/BaseStepper";
import BaseSelect from "../atoms/BaseSelect";
import BaseCheckboxAndRadio from "../atoms/BaseCheckboxAndRadio";
import BaseInputDate from "../atoms/BaseInputDate";

export default {
  name: "FormComponets",
  data() {
    return {
      userName: null,
      citizenId: null,
      insuredName: null,
      relations: null,
      gender: null,
      dob: "",
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
          info: "Review"
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
      ],
      errValidation: {
        status: false,
        message: "test error"
      }
    };
  },
  components: {
    BaseInput,
    BaseStepper,
    BaseSelect,
    BaseCheckboxAndRadio,
    BaseInputDate
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

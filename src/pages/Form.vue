<template>
  <div id="form-container">
    <BaseStepper :dataSteps="dataSteps" />
    <h1>Form</h1>
    <form>
      <base-input
        :value="userName"
        label="Nama Lengkap"
        v-on:handle-change="handleInputChange"
        v-on:error-handler="handleErrorInput"
        name="userName"
        note="Note: Nama Lengkap"
        char="^[A-Za-z ]+$"
        :min-length="6"
        :error="errValidation.status"
        required
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
        :value="email.val"
        label="Email"
        v-on:handle-change="handleInputChange"
        v-on:error-handler="handleErrorEmail"
        :error="email.err"
        :err-msg="email.errMsg"
        name="email"
        inputType="email"
        required
      ></base-input>
      <br />
      <base-select
        name="relations"
        label="Hubungan"
        v-on:error-handler="handleErrorSelect"
        v-on:handle-change="handleInputChange"
        :select="opt => opt.val !== 'mother'"
        :options="dataSelectOpt"
        :value="relations"
        :error="errSelectValidate.status"
        :err-msg="errSelectValidate.message"
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
        :value="dob.val"
        :min-age="17"
        :max-age="40"
        v-on:error-handler="handleErrorDob"
        :error="dob.err"
        :err-msg="dob.errMsg"
        @input="handleInputChange"
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
      dob: {
        val: "",
        err: false,
        errMsg: "",
        min: 4,
        minAge: 17,
        maxAge: 40
      },
      email: {
        val: null,
        err: false,
        errMsg: "",
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
      },
      errSelectValidate: {
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
      if (name === "dob" || name === "email") {
        this[name].val = val;
      } else {
        this[name] = val;
      }
    },
    handleErrorInput(isError, type) {
      if (type === "required") {
        this.errValidation.status = isError;
        this.errValidation.message = "This field required";
      } else if (type === "ok") {
        this.errValidation.status = isError;
        this.errValidation.message = "";
      } else if (type === "min-length") {
        this.errValidation.status = isError;
        this.errValidation.message = "min length";
      }
    },
    handleErrorSelect(isError, type) {
      console.log(isError, type);
      if (type === "required") {
        this.errSelectValidate.status = isError;
        this.errSelectValidate.message = "Relations is required";
      } else if (type === "ok") {
        this.errSelectValidate.status = isError;
        this.errSelectValidate.message = "";
      }
    },
    handleErrorDob(isError, type, name) {
      console.log(isError, type, name);
      if (type === "invalid") {
        this.dob.err = isError;
        this.dob.errMsg = "Invalid Date";
      } else if (type === "min-age") {
        this.dob.err = isError;
        this.dob.errMsg = "min age";
      } else if (type === "max-age") {
        this.dob.err = isError;
        this.dob.errMsg = "max age";
      } else if (type === "ok") {
        this.dob.err = isError;
        this.dob.errMsg = "";
      }
    },
    handleErrorEmail(isError, type) {
      console.log(isError, type);
      if (type === "required") {
        this.email.err = isError;
        this.email.errMsg = "Relations is required";
      } else if (type === "ok") {
        this.email.err = isError;
        this.email.errMsg = "";
      } else if (type === "email") {
        this.email.err = isError;
        this.email.errMsg = "Invalid Email";
      }
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

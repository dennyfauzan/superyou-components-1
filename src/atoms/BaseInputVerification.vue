<template>
  <div class="verification__security-code clearfix">
    <div class="verification__security-code-wrapper">
      <div class="verification__security-code-field" v-for="n in securityCodeLength" :key="n">
        <input maxlength="1" autocorrect="off" autocomplete="off" autocapitalize="off" spellcheck="false" type="tel"
          class="form-control" v-model="securityCode[n - 1]" @focus="setSelected" @input.stop="inputEvent"
          @keydown.stop="downEvent" @keypress.stop="pressEvent" @paste="pasteEvent(n - 1, $event)" :style="{ fontSize: (widthHeight - 5) + 'px', width: widthHeight + 'px', height: widthHeight + 'px' }" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: [Number, String],
        required: true
      },
      blurOnComplete: {
        type: Boolean,
        default: false
      },
      securityCodeLength: {
        type: Number,
        default: 6
      },
      isArray: {
        type: Boolean,
        default: false
      },
      widthHeight: {
        type: Number,
        default: 22
      }
    },
    data() {
      return {
        securityCode: new Array(this.securityCodeLength)
      };
    },
    mounted() {
      if (this.value !== 0) {
        this.securityCode = this.value
          .toString()
          .substr(0, this.securityCodeLength)
          .split("");
      }
    },
    methods: {
      inputEvent(event) {
        let value = event.target.value;
        if (value.length > 1) {
          event.target.value = value.substr(0, 1);
        }
        this.getCodeString().length === this.securityCodeLength
          ? this.blurOnComplete
            ? event.target.blur()
            : this.nextElement(event)
          : event.target.value && this.nextElement(event);
      },
      /**
       * Listen paste event.
       *
       * @param  {[type]} index
       * @param  {[type]} event
       *
       * @return {[array]}
       */
      pasteEvent(index, event) {
        let i,
          pasteData,
          elements = event.target.parentNode.parentNode.childNodes,
          len = 0,
          vm = this;
        for (
          event.clipboardData && event.clipboardData.getData
            ? (pasteData = event.clipboardData.getData("Text"))
            : window.clipboardData &&
            window.clipboardData.getData &&
            (pasteData = window.clipboardData.getData("Text")),
          pasteData = pasteData
            .replace(/\s/g, "")
            .substr(0, elements.length - index)
            .split(""),
          i = 0;
          i < elements.length && !isNaN(Number(pasteData[i]));
          i++
        ) {
          len++;
          elements[i + index].firstChild.value = pasteData[i];
          vm.securityCode[i + index] = pasteData[i];
        }
        return [
          setTimeout(() => {
            vm.getCodeString().length === vm.securityCodeLength
              ? vm.blurOnComplete
                ? event.target.blur()
                : vm.previousElement(event, vm.getCodeString().length - 1)
              : vm.previousElement(event, index + len);
          }, 0),
          event.preventDefault(),
          false
        ];
      },
      pressEvent(event) {
        let keyCode = event.which || event.keyCode;
        return this.isMainKeyCode(keyCode) ||
          this.isTab(keyCode) ||
          this.isBackspace(keyCode) ||
          this.isMetaKey(event, keyCode)
          ? void 0
          : (event.preventDefault(), false);
      },
      downEvent(event) {
        let parentNode = event.target.parentNode;
        let keyCode = event.which || event.keyCode;
        let _sibling;
        if (keyCode === 8 && !event.target.value) {
          _sibling = parentNode.previousSibling;
          if (_sibling) {
            _sibling.firstChild.focus();
          }
        } else if (keyCode >= 37 && keyCode <= 41) {
          switch (keyCode) {
            case 37:
              _sibling = parentNode.previousSibling;
              break;
            case 39:
              _sibling = parentNode.nextSibling;
              break;
          }
          if (_sibling) {
            _sibling.firstChild.focus();
          }
          return [event.preventDefault(), false];
        }
      },
      previousElement(event, length) {
        let elements = event.target.parentNode.parentNode.childNodes;
        if (length >= elements.length) {
          length = elements.length - 1;
        }
        elements[length].firstChild.focus();
      },
      nextElement(event) {
        let parentNode = event.target.parentNode;
        let nextSibling = parentNode.nextSibling;
        nextSibling ? nextSibling.firstChild.focus() : parentNode.focus();
      },
      isMainKeyCode(keyCode) {
        return keyCode >= 48 && keyCode <= 57;
      },
      isTab(keyCode) {
        return keyCode === 9;
      },
      isBackspace(keyCode) {
        return keyCode === 8;
      },
      isMetaKey(event, keyCode) {
        return event.metaKey && keyCode === 118;
      },
      setSelected(event) {
        event.target.select();
      },
      getCodeString() {
        let code = this.isArray ? this.securityCode : this.securityCode.join("");

        this.$emit("input-verification", code);
        return code;
      }
    }
  };
</script>

<style scoped lang="scss">
  .verification__security-code {
    display: -webkit-box;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  .verification__security-code-wrapper {
    display: inline-block;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }

  .verification__security-code-wrapper .verification__security-code-field {
    display: inline-block;
    margin-right: 10px;
    float: left;
  }

  @media only screen and (max-device-width: 736px) {
    .verification__security-code-wrapper .verification__security-code-field {
      float: none;
      margin-right: 3px;
    }
  }

  .verification__security-code-wrapper .verification__security-code-field .form-control {
    font-size: 15px;
    text-align: center;
    padding: 0;
    border-width: 0;
    border-bottom: 1px solid #a8adb7;

    &:focus {
      outline: none;
    }
  }

  @media only screen and (max-device-width: 736px) {
    .verification__security-code-wrapper .verification__security-code-field .form-control {
      margin: 0;
    }
  }
</style>
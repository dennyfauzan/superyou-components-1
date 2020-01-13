<template>
  <div class="su-stepper-wrapper">
    <div id="su-stepper">
      <div class="su-progress">
        <div class="bar" :style="{ width: `${barWidth}%` }"></div>
      </div>
      <div class="su-step" v-for="(step, index) in dataSteps" :key="step.info">
        <div class="rounded" :class="{ passed: isStepPassed(index) }">
          {{ step.title }}
        </div>
        <div class="info">{{ step.info }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseStepper",
  props: {
    dataSteps: {
      type: Array,
      default: function() {
        return [
          {
            title: "1",
            info: "Info 1"
          },
          {
            title: "2",
            info: "Info 2"
          },
          {
            title: "3",
            info: "Info 3"
          },
          {
            title: "4",
            info: "Info 4"
          }
        ];
      }
    },
    currentStep: {
      type: Number,
      default: 1
    }
  },
  methods: {
    isStepPassed(stepIndex) {
      if (stepIndex < this.currentStep) {
        return true;
      }
      return false;
    }
  },
  computed: {
    barWidth() {
      if (this.currentStep === 0 || this.currentStep === 1) {
        return 0;
      }

      let totalSteps = this.dataSteps.length - 1;
      const stepminusone = this.currentStep - 1;
      const percentage = (1 / totalSteps) * 100;
      const result = percentage * stepminusone;
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.su-stepper-wrapper {
  overflow: hidden;
  height: 70px;
  padding: 0 23px;
}
#su-stepper {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;

  .su-progress {
    position: absolute;
    left: 0;
    width: 100%;
    border-top: 1px solid #00aaae;
    border-bottom: 1px solid #00aaae;
    align-self: center;
    z-index: 0;
    height: 6px;

    .bar {
      height: 5px;
      width: 40%;
      background-color: #00aaae;
      transition: width 0.4s ease;
      transition: width 0.4s ease;
      max-width: 100%;
    }
  }

  .su-step {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .rounded {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      z-index: 1;
      font-size: 12px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      color: #00aaae;
      border: 1px solid #00aaae;
      &.passed {
        border: 1px solid #00aaae;
        background-color: #00aaae;
        color: #fff;
      }
    }

    .info {
      position: absolute;
      margin-top: 35px;
      font-size: 12px;
      font-weight: bold;
      color: #00aaae;
      max-width: 75px;
      min-width: 50px;
      line-height: 1.3;
      @media screen and (max-width: 320px) {
        font-size: 10px;
      }
    }
  }
}
</style>

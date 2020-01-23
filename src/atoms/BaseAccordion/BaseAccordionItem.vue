<template>
  <div :id="groupId + '-' + item.id" class="accordion-item" :class="{'is-active': item.active}">
    <dt class="accordion-item-title">
      <button @click="toggle" class="accordion-item-trigger">
        <h3 class="accordion-item-title-text">{{item.title}}</h3>
        <span class="accordion-item-trigger-icon"></span>
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="item.active" class="accordion-item-details">
        <div v-html="item.details" class="accordion-item-details-inner"></div>
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseAccordionItem",
  props: ["item", "multiple", "groupId"],
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active;
      else {
        this.$parent.$children.forEach(item => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active;
          else item.item.active = false;
        });
      }
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },
    endTransition(el) {
      el.style.height = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.accordion-item-trigger {
  padding: 1.25rem;
  outline: none;
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
}

.accordion-item-details {
  overflow: hidden;
  background-color: whitesmoke;
  margin: 0;
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .accordion-item-details-inner {
    padding: 10px 10px 10px 1.25rem;
  }
}

.accordion-item-title {
  position: relative;

  h3 {
    margin: 0;
    color: #0d294a;
    padding-right: 1.25rem;
    font-weight: 600;
    font-size: 16px;
    @media screen and (max-width: 640px) {
      padding-right: 1rem;
      font-size: 14px;
    }
  }
}

.accordion-item-trigger {
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
}

.accordion-item-trigger-icon {
  $size: 8px;
  display: block;
  position: absolute;
  top: 0;
  right: 1.25rem;
  bottom: 0;
  margin: auto;
  width: $size;
  height: $size;
  border-right: 2px solid #363636;
  border-bottom: 2px solid #363636;
  transform: translateY(-$size / 4) rotate(45deg);
  transition: transform 0.2s ease;

  .is-active & {
    transform: translateY($size / 4) rotate(225deg);
  }
}

.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}
.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}
</style>
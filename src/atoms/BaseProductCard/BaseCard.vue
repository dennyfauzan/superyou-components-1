<template>
  <div class="card">
    <slot name="top-portion">header</slot>
    <slot name="middle-portion">Middle</slot>
    <slot name="bottom-portion">Add On</slot>
  </div>
</template>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.card {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px 8px rgba(109, 131, 172, 0.25);
  background-color: #ffffff;
  width: 100%;
}
</style>

<template>
    <div>
      <slot :class="`button`">{{ text }}</slot>
    </div>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Hire Me'
  }
})
</script>

<style lang="scss" scoped>
.button {
    padding: 0.4em 2.2em;
    border-radius: 15px;
    border: none;
    white-space: nowrap;
    display: inline-block;
    font-weight: bold;
    color: var(--crl);
    background-color: var(--btn);
    transition: color 400ms, background-color 450ms ease-in-out;
    &:hover {
      color: var(--btn);
      background-color: var(--crl);
    }
  }
</style>
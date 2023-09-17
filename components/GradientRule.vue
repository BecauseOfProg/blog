<template>
  <hr
    class="mt-2 mb-8"
    style="height: 15px; border: none; background: linear-gradient(90deg,#ff514c 0%,#ff9779 100%)"
    :style="{ 'border-radius': round && '8px' }"
  >
</template>

<script>
export default {
  name: 'GradientRule',
  props: {
    round: Boolean
  }
}
</script>

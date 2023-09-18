<template>
  <div class="b-loading-screen">
    <v-progress-circular
      :size="100"
      color="darker"
      indeterminate
    />
  </div>
</template>

<script>
export default {
  name: 'BLoadingScreen'
}
</script>

<style>
.b-loading-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
}
</style>

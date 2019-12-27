<template>

</template>

<script>
export default {
  name: 'Search',
  props: {
    keyword: {
      type: String,
      default: null
    },
    page: {
      type: Number,
      default: 0
    }
  }
}
</script>

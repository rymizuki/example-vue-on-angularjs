<template lang="pug">
  article
    h2 Vue wrapped view
    p this page created by Vue
    p message: {{state.message}}
    p count: {{state.count}}
</template>

<script>
export default {
  props: ['state']
}
</script>

<style>

</style>

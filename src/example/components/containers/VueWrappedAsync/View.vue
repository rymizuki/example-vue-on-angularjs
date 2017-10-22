<template lang="pug">
  article
    p this component aync
    p message: {{state.message}}
</template>

<script>
export default {
  props: [
    'state',
  ]
}
</script>

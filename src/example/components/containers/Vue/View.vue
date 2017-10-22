<template lang="pug">
  article
    header
      h2 Vue wrapped view
      p this page created by Vue
    nav
      a(href="#!/vue/wrapped") angular wrapped vue
      a(href="#!/vue/wrapped-async") angular wrapped vue with async
      div() {{state.message}}
      div(v-ui-view="")
</template>

<script>
import { uiView } from 'angular-to-vue-connector'

export default {
  props: [
    'state'
  ],
  directives: {
    uiView,
  },
}
</script>

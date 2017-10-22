import angular from 'angular'
import 'angular-to-vue-connector'

import View from './view'

export const MODULE_NAME = 'example.components.containers.vue'

angular.module(MODULE_NAME, [
  'angularToVueConnector',
])
  .directive('pageVue', ($connectVue) => {
    console.log($connectVue({ View }))
    return $connectVue({ View })
  })

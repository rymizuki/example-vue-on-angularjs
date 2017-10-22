import angular from 'angular'
import 'angular-to-vue-connector'

import View from './view'

export const MODULE_NAME = 'example.components.containers.VueWrapped'

angular.module(MODULE_NAME, [
  'angularToVueConnector',
])
  .directive('pageVueWrapped', ($connectVue) => {
    return $connectVue({ View })
  })

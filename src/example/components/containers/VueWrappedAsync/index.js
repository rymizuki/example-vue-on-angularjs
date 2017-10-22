import Q from 'q'
import angular from 'angular'
import 'angular-to-vue-connector'

export const MODULE_NAME = 'example.components.containers.PageVueWrappedAsync'

angular.module(MODULE_NAME, [
  'angularToVueConnector',
])
  .directive('pageVueWrappedAsync', ($connectVue) => {
    return $connectVue({ View: import('./view') })
  })

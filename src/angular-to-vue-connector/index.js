import angular from 'angular'

import uiView from './directives/uiView'
import * as Factory from './connector'

const MODULE_NAME = 'angularToVueConnector'

angular.module(MODULE_NAME, [
  Factory.MODULE_NAME,
])

export { uiView }
export default MODULE_NAME

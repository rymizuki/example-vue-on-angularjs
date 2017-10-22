import angular from 'angular'

import * as router from './router'

angular.module('example', [
  router.MODULE_NAME,
])

try {
  angular.bootstrap(document.getElementsByTagName('html')[0], [ 'example' ])
} catch (e) {
  console.error(e)
}

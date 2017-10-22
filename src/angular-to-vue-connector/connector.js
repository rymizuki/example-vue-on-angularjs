import angular from 'angular'
import Vue     from 'vue'
import Q       from 'q'

function createPropsData (View, $scope, $attr) {
  const attr = $attr
  const data = {}
  Object.keys(attr).forEach((key) => {
    if (!/^\$/.test(key)) data[key] = $scope.$eval(attr[key])
  })
  return data
}

export class AngularVueConnector {
  constructor ({ View }) {
    this.scope = false
    this.View = View
    this.view = null
  }
  link ($scope, $element, $attr) {
    const promise = typeof this.View.then == 'function' ? this.View : Q.when(this.View)
    return promise.then((_View_) => {
      const View = _View_.default == null ? _View_ : _View_.default
      View.propsData = createPropsData(View, $scope, $attr)

      this.view = new Vue(View)
      this.view.$mount($element[0])
    })
  }
}

export const MODULE_NAME = 'angularToVueConnector.Connector'

angular.module(MODULE_NAME, [
])
  .factory('$connectVue', [
    () => {
      return function ({ View }) {
        return new AngularVueConnector({ View })
      }
    }
  ])

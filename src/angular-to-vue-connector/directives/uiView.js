import Vue from 'vue'

function findParentAngularElement (el) {
  const parentNode = el.parentNode
  const element = parentNode.querySelector('.ng-scope')
  if (element) {
    return angular.element(element)
  } else {
    return findParentAngularElement(parentNode)
  }
}

export default Vue.directive('uiView', {
  inserted (el) {
    const element = findParentAngularElement(el)
    if (element == null)
      throw new Exception('[v-ui-view] Not found parent scope. Use in angularjs socopes.')

    const $scope   = element.scope()
    const $compile = element.injector().get('$compile')

    el.setAttribute('ui-view', '')
    $compile(el)($scope)
  }
})

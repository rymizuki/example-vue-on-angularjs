import angular from 'angular'

export const MODULE_NAME = 'example.components.container.home'

angular.module(MODULE_NAME, [
])
  .component('pageHome', {
    template: `<p>hello, this page is home</p>`,
  })

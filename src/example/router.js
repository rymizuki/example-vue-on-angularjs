import angular from 'angular'
import 'angular-ui-router'

import * as Provider            from 'example/components/Provider'
import * as HomeView            from 'example/components/containers/Home'
import * as VueView             from 'example/components/containers/Vue'
import * as VueWrappedView      from 'example/components/containers/VueWrapped'
import * as VueWrappedAsyncView from 'example/components/containers/VueWrappedAsync'

export const MODULE_NAME = 'example.router'

angular.module(MODULE_NAME, [
  'ui.router',
  Provider.MODULE_NAME,
  HomeView.MODULE_NAME,
  VueView.MODULE_NAME,
  VueWrappedView.MODULE_NAME,
  VueWrappedAsyncView.MODULE_NAME,
])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider
      .otherwise('/')

    $stateProvider
      .state({
        abstract: true,
        name: 'app',
        template: `<example-provider></example-provider>`,
      })
      .state({
        name: 'app.home',
        url: '/',
        template: '<page-home></page-home>'
      })
      .state({
        name: 'app.vue',
        url: '/vue',
        template: '<page-vue state="$ctrl.state"></page-vue>',
      })
        .state({
          name: 'app.vue.wrapped',
          url: '/wrapped',
          template: '<page-vue-wrapped state="$ctrl.state"></page-vue-wrapped>'
        })
        .state({
          name: 'app.vue.wrapped-async',
          url: '/wrapped-async',
          template: '<page-vue-wrapped-async state="$ctrl.state"></page-vue-wrapped-async>'
        })
  })

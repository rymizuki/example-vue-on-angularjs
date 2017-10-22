import angular from 'angular'

export const MODULE_NAME = 'example.views.app'

angular.module(MODULE_NAME, [
])
  .component('exampleProvider', {
    template: `
      <header>
        <h1>Example</h1>
      </header>
      <nav>
        <a ui-sref="app.home">home</a>
        <a ui-sref="app.vue">vue</a>
      </nav>
      <ui-view></ui-view>
      <button ng-click="$ctrl.incr()">incr</button>
    `,
    controller () {
      this.state = {
        message: 'example',
        count: 0,
      }
      this.incr = function () {
        this.state.count++
      }
      return this
    }
  })

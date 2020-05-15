define(function(require){
    require('./qr.tpl');
    var Vue = require('Vue');
    var Profile = Vue.extend({
        template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
        data: function () {
          return {
            firstName: 'Walter',
            lastName: 'White',
            alias: 'Heisenberg'
          }
        }
      })
      // 创建 Profile 实例，并挂载到一个元素上。
      return new Profile().$mount('#mount-point')
      //最终显示
        
});
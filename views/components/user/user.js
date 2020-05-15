define(function(require){
   var user = {
       template:require('./user.tpl'),
       data:function(){
           return {
               user:'申晓亮',
               age:28
           }
       },
       methods:{
            changeAge(v){
                this.age=v;
            }
       },
       mounted(){           
           window.changeAge = this.changeAge;
       }
   }
   return user;
});
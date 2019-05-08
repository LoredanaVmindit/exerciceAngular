//<reference path = "tableController.js"/>
angular.module('app').factory('servUser',function () {

         var setItem = function (user) {
                myuser = user ; 

         };

         var getItem = function (){
                 return myuser ;
         };
       
        return {
                set : setItem,
                get : getItem
        };


});

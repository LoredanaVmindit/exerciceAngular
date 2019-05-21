//<reference path = "tableController.js"/>
//this service store the selected user from the table
angular.module('app').factory('servUser', function () {
        var myuser = undefined;
       

        var setItem = function (user) {

                myuser = user;      
        };

        var updateItem = function (user) {

                myuser = user;      
        };

        var testDefinedUser = function () {

                if (myuser == undefined) {
                        
                        return 0;
                }
                return 1;
        };


        var getItem = function () {
                return myuser;
        };

        return {
                set: setItem,
                get: getItem,
                test: testDefinedUser,
                update: updateItem
               
        };




});

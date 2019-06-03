//<reference path = "tableController.js"/>
//this service stores the selected user from the table
angular.module('app').factory('$servUser', function () {
        var myuser = undefined;


        var set = function (user) {

                myuser = user;
        };

        var update = function (user) {

                myuser = user;
        };

        var testDefinedUser = function () {

                if (myuser == undefined) {

                        return 0;
                }
                return 1;
        };


        var get = function () {
                return myuser;
        };

        return {
                set: set,
                get: get,
                test: testDefinedUser,
                update: update

        };




});

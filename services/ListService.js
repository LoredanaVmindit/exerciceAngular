//<reference path = "viewContr.js" />
//<reference path = "tableController.js"/>

angular.module('app').factory('array', function () {


    var listDefault = function () {
        var list = [];

        for (i = 1; i <= localStorage.length; i++) {
            var retrieve = localStorage.getItem(i);
            list.push(JSON.parse(retrieve));
        }

        return list;
    };

    var listUpdate = function () {


        for (i = 1; i <= localStorage.length; i++) {
            var retrieve = localStorage.getItem(i);
            list.push(JSON.parse(retrieve));
        }


    };


    return {

        list: listDefault,
        updateList: listUpdate
    };






});



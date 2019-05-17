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

    var searchInStorage = function (user){
        for (i = 1; i <= localStorage.length; i++) {
            var retrieve = localStorage.getItem(i);
            if(retrieve.ID === user.ID){
                console.log('user founded');
            }
            
        }
    };


    return {

        list: listDefault,
        searchStorage : searchInStorage

    };






});



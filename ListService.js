//<reference path = "viewContr.js" />
//<reference path = "tableController.js"/>

angular.module('app').factory('array',function (){
    list = [
        { ID: '123589', name: 'Loredana V.', age: 20 },
        { ID: '256987', name: 'Iulian', age: 21 },
        { ID: '147589', name: 'Marius', age: 20 },
        { ID: '333666', name: 'Ion', age: 22 }
    ];

    return list ; 
});



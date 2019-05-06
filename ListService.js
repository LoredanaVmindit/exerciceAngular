//<reference path = "viewContr.js" />
//<reference path = "tableController.js"/>

angular.module('app').factory('array',function (){
    list = [
        { ID: '123589', name: 'Loredana V.', age: 20 , email :"vulpeloredanageorgiana@yahoo.com", city : "Bucharest"},
        { ID: '256987', name: 'Iulian', age: 21 , email :"iulian@yahoo.com", city : "Brasov"},
        { ID: '147589', name: 'Marius', age: 20 , email :"marius.sc@gmail.com" , city : "Galati"},
        { ID: '333666', name: 'Ion', age: 22 , email : "ion98@yahoo.com", city : "Iasi" }
    ];

    return list ; 
});



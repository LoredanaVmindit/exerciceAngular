(function(){
    var app = angular.module("app");
    var tableController = function ($scope ,$location ) { 
        
        $scope.list = [
            { ID: '123589', name: 'Loredana V.', age: 20 },
            { ID: '256987', name: 'Iulian', age: 21 },
            { ID: '147589', name:'Marius', age:20},
            { ID: '333666', name:'Ion', age:22}
        ];

        $scope.clicked = function(){
             $location.path("/create"); 
         }
 
        
       
    };
    app.controller("tableController", ["$scope","$location", tableController]);


}());
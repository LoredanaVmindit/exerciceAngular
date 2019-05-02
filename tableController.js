(function () {
    angular.module('app')
        .controller('tableController', ['$scope', '$location', tableController]);


    function tableController($scope, $location) {
        console.log('table controller initialised');
        if (typeof (Storage) != "undefined") {
            console.log('supports local storage');
        } else {
            console.log('does not support local storage');
        }

        $scope.list = [
            { ID: '123589', name: 'Loredana V.', age: 20 },
            { ID: '256987', name: 'Iulian', age: 21 },
            { ID: '147589', name: 'Marius', age: 20 },
            { ID: '333666', name: 'Ion', age: 22 }
        ];

        $scope.clicked = function () {
            $location.path('/create');
            console.log('clicked create');
        }

        $scope.clickedv = function () {
            $location.path('/view');
            console.log('clicked view');
        }

        $scope.clickede = function () {
            $location.path('/edit');
            console.log('clicked edit');
        }


        $scope.clickedd = function () {
            $location.path('/delete');
            console.log('clicked delete');
        }

        

    }



})();
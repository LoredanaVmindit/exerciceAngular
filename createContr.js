(function () {
    angular.module('app')
        .controller('createContr', ['$scope', '$location', createContr]);


    function createContr($scope, $location) {
        console.log('create controller initialised');
        let index = 0;

        $scope.submit = function () {
            console.log('You clicked submit');
            index += 1;
            if ($scope.about == undefined) {
                window.localStorage.setItem(index, $scope.name + ' , ' + $scope.email + ' , ' + $scope.bday);
            }
            else {
                window.localStorage.setItem(index, $scope.name + ' , ' + $scope.email + ' , ' + $scope.bday + ' , ' + $scope.about);
            }


        }

        $scope.deleteCookie = function () {

            window.localStorage.clear();
            index = 0;
            alert('The localStorage is cleared!');
        }

        $scope.back = function (){
            $location.path('/');
            console.log('back in the menu');
        }


    }



})();
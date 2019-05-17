(function () {
    angular.module('app')
        .controller('controllers/createContr', ['$scope', '$location', 'array', 'servUser', createContr]);


    function createContr($scope, $location, array, servUser) {
        console.log('create controller initialised');


        var test = function () {

            if ($scope.name === undefined || $scope.name === "") {
                alert("ERROR! Name is not introduced");
                
                $scope.name = null;

            } else {

                var str = $scope.name;
                var patt = /\d/g;
                var result = str.match(patt);

                if (result != null) {
                    alert('ERROR! The name contains numbers');
                    $scope.name = null;

                }

            }

            if ($scope.bday == undefined) {

                alert("ERROR! Birthday is not introduced");
                $scope.bday = null;

            }

        }

        var testAdd = function (index) {

            test();
            if (($scope.name != null) && $scope.bday != null ) {

                if ($scope.about == undefined) {

                    var current_date = (new Date()).valueOf().toString().substring(9, 14);
                    var userObj = { ID: current_date, name: $scope.name, email: $scope.email, bday: $scope.bday.toString().substring(4,16) };
                    window.localStorage[index] = JSON.stringify(userObj);

                } else {

                    var current_date = (new Date()).valueOf().toString().substring(9, 14);  //generate random number
                    var userObj = { ID: current_date, name: $scope.name, email: $scope.email, bday: $scope.bday.toString().substring(4,16), about: $scope.about };
                    window.localStorage[index] = JSON.stringify(userObj);

                }

            }

        }
        ///////submit button
        $scope.submit = function () {
            console.log('You clicked submit');
            
            let index = localStorage.length;
            index += 1;
            testAdd(index);

        }
        //////delete localStorage
        $scope.deleteCookie = function () {

            window.localStorage.clear();
            index = 0;
            alert('The localStorage is cleared!');
        }

        $scope.back = function () {
            $location.path('/');
            console.log('Back in the menu');
        }


    }


})();
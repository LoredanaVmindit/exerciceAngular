(function () {
    angular.module('app')
        .controller('controllers/createContr', ['$scope', '$location', '$localStore', '$timeout', createContr]);


    function createContr($scope, $location, $localStore, $timeout) {
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

        var testAdd = function (index) {  //tests if there exists data introduced and adds them in table(and localStorage)

            test();
            var current_date = null;
            var userObj = null;

            if (($scope.name != null) && $scope.bday != null) {

                if ($scope.about == undefined) {

                    current_date = (new Date()).valueOf().toString().substring(9, 14);
                    userObj = { ID: current_date, name: $scope.name, email: $scope.email, bday: $scope.bday.toString().substring(4, 16) };
                    window.localStorage[index] = JSON.stringify(userObj);

                } else {

                    current_date = (new Date()).valueOf().toString().substring(9, 14);  //generate random number
                    userObj = { ID: current_date, name: $scope.name, email: $scope.email, bday: $scope.bday.toString().substring(4, 16), about: $scope.about };
                    window.localStorage[index] = JSON.stringify(userObj);

                }

            }

        }

        ///////submit button
        $scope.submit = function () {

            let index = localStorage.length;
            index += 1;
            testAdd(index);
            $timeout(function () {
                $location.path('/')
            }, 2000);

        }

        //////delete localStorage button
        $scope.deleteHistory = function () {
            $localStore.deleteAll();
        }

        $scope.back = function () {
            $location.path('/');
            console.log('Back in the menu');
        }

    }

})();
(function () {
    angular.module('app')
        .controller('tableContr', ['$scope', '$location', 'array', 'servUser','localStore', tableController]);


    function tableController($scope, $location, array, servUser,localStore) {

        $scope.list = array.list();

        $scope.selUser = function (user) {

             $scope.row = servUser.set(user);
            //var pos = localStore.pos(servUser.get());
             
        }

        $scope.clicked = function () {

            $location.path('/create');
            console.log('clicked create');

        }

        $scope.clickedv = function () {

            if (servUser.test() == 0) {

                alert("The user is not selected!");
                $location.path('/');

            } else {

                $location.path('/view');
                console.log('clicked view');

            }

        }

        $scope.clickede = function () {

            if (servUser.test() == 0) {

                alert("The user is not selected!");
                $location.path('/');

            } else {

                $location.path('/edit');
                console.log('clicked edit');

            }

        }

        $scope.clickedd = function () {

            console.log('clicked delete');

            if (servUser.test() == 0) {

                alert("The user is not selected!");
                $location.path('/');

            } else {

                $location.path('/delete');
                console.log('clicked edit');

            }

        }

    }

})();
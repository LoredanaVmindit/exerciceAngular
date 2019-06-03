(function () {
    angular.module('app')
        .controller('tableContr', ['$scope', '$location', '$array', '$servUser', '$search', tableController]);


    function tableController($scope, $location, $array, $servUser, $search) {

        $scope.listUsers = $array.getListFromLocalStorage();

        $scope.selectUser = function (user) {

            $scope.row = $servUser.set(user);

        }

        $scope.clickCreate = function () {

            $location.path('/create');

        }

        $scope.clickView = function () {

            if ($servUser.test() == 0) {

                alert("The user is not selected!");
                $location.path('/');

            } else {

                $location.path('/view');
                console.log('clicked view');

            }

        }

        $scope.clickEdit = function () {

            if ($servUser.test() == 0) {

                alert("The user is not selected!");
                $location.path('/');

            } else {

                $location.path('/edit');
                console.log('clicked edit');

            }

        }

        $scope.clickDelete = function () {

            console.log('clicked delete');

            if ($servUser.test() == 0) {

                alert("The user is not selected!");
                $location.path('/');

            } else {

                $location.path('/delete');
                console.log('clicked edit');

            }

        }

        $scope.searchBar = function () {

            console.log('clicked search');
            $search.save($scope.keyword);

            if (this.keyword === undefined) {

                window.alert('You did not type a word in search box!')
            } else {

                $location.path('/result-photo');
                
            }

        }

    }



})();
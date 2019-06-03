(function () {

    angular.module('app')
        .controller('controllers/delContr', ['$scope', '$location', '$servUser', '$localStore', '$timeout', delContr]);

    function delContr($scope, $location, $servUser, $localStore, $timeout) {

        // $scope.selected = false;


        $scope.deletedRec = $servUser.get();
        //  $scope.selected = true;



        $scope.deleteUser = function () {
            if ($localStore.length() > 0) {
                $localStore.delete($scope.deletedRec);
                alert('The user was removed successfully!');
                $location.path('/');

            } else {
                alert('There are no more users!');
                $timeout(function () {
                    $location.path('/')
                }, 1500);
            }

        };

    }

}());
(function () {

    angular.module('app')
        .controller('controllers/delContr', ['$scope', '$location', 'array', 'servUser', 'localStore', delContr]);

    function delContr($scope, $location, array, servUser, localStore) {

        console.log('delete in controller');
        $scope.selected = true;

        if (servUser.test() == 1) {
            $scope.deletedRec = servUser.get();
        }
        else {
            $scope.selected = false;
        }

        $scope.delete = function () {
            localStore.delete($scope.deletedRec);
            alert('The user was removed successfully!');
            $location.path('/');
        };


    }

}());
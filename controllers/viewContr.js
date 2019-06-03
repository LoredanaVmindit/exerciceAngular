(function () {
    angular.module('app')
           .controller('controllers/viewContr', ['$scope', '$location', '$servUser', viewContr]);

    function viewContr($scope, $location, $servUser) {

        console.log('Here is the controller view!');

        $scope.selectedUser = $servUser.get();

        $scope.back = function () {
            $location.path('/');
            console.log('Back in the menu');
        };

    }
})();
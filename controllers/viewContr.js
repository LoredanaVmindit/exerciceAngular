(function () {
    angular.module('app')
        .controller('controllers/viewContr', ['$scope', '$location', 'array', 'servUser', viewContr]);

    function viewContr($scope, $location, array, servUser) {

        console.log('Here is the controller view!');

        $scope.printSelected = servUser.get();

        $scope.back = function () {
            $location.path('/');
            console.log('Back in the menu');
        }

    }
})();
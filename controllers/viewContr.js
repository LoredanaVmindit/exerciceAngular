(function () {
    angular.module('app')
        .controller('controllers/viewContr', ['$scope', '$location', 'array', 'servUser', viewContr]);

    function viewContr($scope, $location, array, servUser) {

        console.log('here is the controller view!');



        $scope.printSelected = servUser.get();

        $scope.back = function () {
            $location.path('/');
            console.log('back in the menu');
        }

    }
})();
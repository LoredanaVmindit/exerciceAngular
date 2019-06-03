(function () {
    angular.module('app')
        .controller('controllers/editContr', ['$scope', '$location', '$servUser', '$localStore', editContr]);

    function editContr($scope, $location, $servUser, $localStore) {

        console.log('here is the controller edit!');


        if ($servUser.test() == 1) { // user is selected
            $scope.selectedUser = $servUser.get();
        } else {
            alert('error!');
        }

        $scope.saveName = function () {

            $scope.selectedUser.name = $scope.Name;
            $localStore.save().Name($scope.selectedUser, $scope.Name);
            $servUser.update($scope.selectedUser);

        };

        $scope.saveEmail = function () {

            $scope.selectedUser.email = $scope.newEmail;
            $localStore.save().Email($scope.selectedUser, $scope.newEmail);
            $servUser.update($scope.selectedUser);

        };

        $scope.saveAbout = function () {

            if ($scope.selectedUser.about != undefined) {

                $scope.selectedUser.about = $scope.About;
                $localStore.save().About($scope.selectedUser, $scope.About);
                $servUser.update($scope.selectedUser);

            }

        };

        $scope.back = function () {
            $location.path('/');
            console.log('back in the menu');
        };

    }
})();
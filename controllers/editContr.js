(function () {
    angular.module('app')
        .controller('controllers/editContr', ['$scope', '$location', 'servUser', 'array', editContr]);

    function editContr($scope, $location, servUser, array) {

        console.log('here is the controller edit!');
        $scope.selected = true;
        console.log(servUser.get())
        if (servUser.test() == 1)
            $scope.printSelected = servUser.get();

        $scope.saveName = function () {
            console.log(printSelected);
            // $scope.printSelected.name = $scope.newName;
            for (i = 1; i <= localStorage.length; i++) {
                var retrieve = localStorage.getItem(i);
                if(retrieve.ID === printSelected.ID){
                    console.log('user founded');
                }
                
            }

        };

        $scope.saveAge = function () {

            $scope.printSelected.age = $scope.newAge;

            for (i in array.list()) {
                if (i.ID === $scope.printSelected.ID) {
                    i.age = $scope.printSelected.age;

                    console.log('success!')
                }
            }
        };

        $scope.saveEmail = function () {

            $scope.printSelected.email = $scope.newEmail;

            for (i in array.list()) {
                if (i.ID === $scope.printSelected.ID) {
                    i.email = $scope.printSelected.email;

                    console.log('success!')
                }
            }
        };

        $scope.saveCity = function () {

            $scope.printSelected.city = $scope.newCity;

            for (i in array.list()) {
                if (i.ID === $scope.printSelected.ID) {
                    i.city = $scope.printSelected.city;

                    console.log('success!')
                }
            }
        };







        $scope.back = function () {
            $location.path('/');
            console.log('back in the menu');
        };

    }
    }) ();
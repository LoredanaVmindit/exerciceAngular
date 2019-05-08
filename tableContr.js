(function () {
    angular.module('app')
        .controller('tableContr', ['$scope', '$location','array','servUser', tableController]);


    function tableController($scope, $location,array,servUser) {
        console.log('table controller initialised');
        if (typeof (Storage) != "undefined") {
            console.log('supports local storage');
        } else {
            console.log('does not support local storage');
        }

        $scope.list = array;

      $scope.selUser = function (user) {
         
             $scope.row = servUser.set(user);
           //  $scope.print = servUser.get();
          
          console.log('user is selected');
      }

        $scope.clicked = function () {
            $location.path('/create');
            console.log('clicked create');
        }

        $scope.clickedv = function () {
            $location.path('/view');
            console.log('clicked view');
        }

        $scope.clickede = function () {
            $location.path('/edit');
            console.log('clicked edit');
        }


        $scope.clickedd = function () {
            $location.path('/delete');
            console.log('clicked delete');
        }

        

    }

    



})();
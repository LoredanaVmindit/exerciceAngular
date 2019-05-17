(function () {

    angular.module('app')
        .controller('controllers/delContr', ['$scope', '$location', 'array', 'servUser', delContr]);

    function delContr($scope, $location, array, servUser) {

        console.log('delete in controller');
        $scope.selected = true;

        if (servUser.test() == 1) {
            $scope.deletedRec = servUser.get();
        }
        else {
            $scope.selected = false;
        }

        $scope.delete = function () {

          /*   var index = -1;
            var theOne = -1; */
            var list = array.list();

            /* for (i in list) {
                console.log('im into for');
                if (i.ID === $scope.deletedRec.ID) {
                    theOne = index;
                }
                index += 1;
            }

            list.splice(theOne, 1); */

            var index = list.indexof($scope.deletedRec);
            if(index > -1) {
                list.splice(index,1);
            }

            alert('The user was removed successfully!');
            $location.path('/');

        };

    }

}());
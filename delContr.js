(function (){

    angular.module('app')
            .controller('delContr',['$scope','$location','array','servUser',delContr]);

        function delContr($scope,$location,array,servUser){
            console.log('delete in controller');
          
            $scope.deletedRec = servUser.get();
            console.log('the record was put to delete process');

            $scope.delete = function () {
                var index = -1;
                var theOne = -1;

                for (i in array) {
                
                    if (i.ID === $scope.deletedRec.ID) {
                        theOne = index ;  
                        
                    }

                    index += 1 ;

                }

                array.splice(theOne,1);
               console.log(array);
            };

            $scope.back = function () {
                $location.path('/');
                console.log('back in the menu');
            }

        }        

}());
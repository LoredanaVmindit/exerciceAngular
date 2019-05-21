(function () {
    angular.module('app')
        .controller('controllers/editContr', ['$scope', '$location', 'servUser', 'localStore', editContr]);

    function editContr($scope, $location, servUser,localStore) {

        console.log('here is the controller edit!');
        
       
        if (servUser.test() == 1){
            $scope.printSelected = servUser.get();

        } 
        
    
        $scope.saveName = function () {
         
            $scope.printSelected.name = $scope.Name;
            localStore.save().Name($scope.printSelected,$scope.Name);
            servUser.update($scope.printSelected);
           
        };

        

        $scope.saveEmail = function () {

            $scope.printSelected.email = $scope.newEmail;
            localStore.save().Email($scope.printSelected,$scope.newEmail);
            servUser.update($scope.printSelected);
            
        };

        $scope.saveAbout = function () {

            if($scope.printSelected.about != undefined) {

                $scope.printSelected.about = $scope.About;
                localStore.save().About($scope.printSelected,$scope.About);
                servUser.update($scope.printSelected);

            }
            
        };


        $scope.back = function () {
            $location.path('/');
            console.log('back in the menu');
        };

    }
    }) ();
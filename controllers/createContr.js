(function () {
    angular.module('app')
        .controller('controllers/createContr', ['$scope', '$location', createContr]);


    function createContr($scope, $location) {
        console.log('create controller initialised');
        let index = 0;

        var test = function(){
            if($scope.name == undefined){
                alert("ERROR! Name is not introduced");

            }
            else{
                var str=$scope.name;
                var patt= /\d/g;
                var result = str.match(patt);
                if(result.length != 0){
                    alert('The name contains numbers');
                    $scope.name = null;
                }

            }

        }
        $scope.submit = function () {
            console.log('You clicked submit');
            
                index += 1;
                if ($scope.about == undefined) {
                    test();
                    window.localStorage.setItem(index, $scope.name + ' , ' + $scope.email + ' , ' + $scope.bday);
                    
                }
                else {
                    test();
                    window.localStorage.setItem(index, $scope.name + ' , ' + $scope.email + ' , ' + $scope.bday + ' , ' + $scope.about);
                }
        }

        $scope.deleteCookie = function () {

            window.localStorage.clear();
            index = 0;
            alert('The localStorage is cleared!');
        }

        $scope.back = function () {
            $location.path('/');
            console.log('back in the menu');
        }

        $scope.deleteOneCookie = function () {
            setTimeout(function () {
                if (index >= 1) {
                    window.localStorage.removeItem(index);
                    index -= 1;
                    console.log(index);
                    alert("The last record is removed");
                }
                else {
                    alert("ERROR! The localStorage is empty!");
                    console.log(index);
                }


            }, 1500);

        }


    }



})();
(function () {

    angular.module('app')
        .controller('controllers/searchContr', ['$scope', '$http', '$search', searchContr]);

    function searchContr($scope, $http, $search) {

        console.log("i'm in controller search");

        this.keyword = $search.get();
        console.log(this.keyword);


        $http.get('https://api.unsplash.com/search/photos?client_id=f50c13e4f29ddba5046c53b0e9ddb7ed05412043645dc197d98ebf29ce1a657e&query=' + this.keyword)
            .then(function (response) {
                if(response.data.total == 0){
                    alert('There are no images for this search')
                }else {
                $scope.info = response.data.results;}


                //$scope.urls = response.data.results.urls.regular;
                //console.log('status:'+$scope.info.description);
            })
            .catch(function (data) {
                window.alert('Something went wrong!')
                console.log(data.status)

            });

    }

})();
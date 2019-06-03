//this service stores the keyword from searchBar(from table view/controller)
angular.module('app').factory('$search', function () {

        var save = function (keyword) {

                this.keyword = keyword;
                //console.log(this.keyword);
        };

        var get = function () {
                return this.keyword;
        };

        return {
                save: save,
                get: get,


        };




});

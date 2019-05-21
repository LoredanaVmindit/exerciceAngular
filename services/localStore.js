//<reference path = "editContr.js" />
angular.module('app').factory('localStore', function () {

    var save = function () {

        var saveName = function (user, name) {
            for (i = 1; i <= localStorage.length; i++) {
                //get from local storage
                if (JSON.parse(localStorage.getItem(i)).ID === user.ID) {
                    var retrieve = JSON.parse(localStorage.getItem(i));
                    console.log(retrieve);
                    retrieve.name = name;
                    localStorage[i] = JSON.stringify(retrieve);

                    break;
                }

            }


        };

        var saveEmail = function (user, email) {
            for (i = 1; i <= localStorage.length; i++) {
                //get from local storage
                if (JSON.parse(localStorage.getItem(i)).ID === user.ID) {
                    var retrieve = JSON.parse(localStorage.getItem(i));
                    console.log(retrieve);
                    retrieve.email = email;
                    localStorage[i] = JSON.stringify(retrieve);

                    break;
                }

            }
        };

        var saveAbout = function (user, about) {
            for (i = 1; i <= localStorage.length; i++) {
                //get from local storage
                if (JSON.parse(localStorage.getItem(i)).ID === user.ID) {
                    var retrieve = JSON.parse(localStorage.getItem(i));
                    console.log(retrieve);
                    retrieve.about = about;
                    localStorage[i] = JSON.stringify(retrieve);

                    break;
                }

            }
        };

        return {
            Name: saveName,
            Email: saveEmail,
            About: saveAbout
        };

    };

    var deleteUser = function (user) {
        for (i = 1; i <= localStorage.length; i++) {
            if (JSON.parse(localStorage.getItem(i)).ID === user.ID) {
                //localStorage.removeItem(i);
                //move to left with one position the entire list(localStorage)
                for (j = i; j < localStorage.length; j++) {
                    localStorage.setItem(j, localStorage.getItem(j + 1));

                }
            }

        }
        //remove last element
        localStorage.removeItem(localStorage.length);

    };



    return {
        save: save,
        delete: deleteUser

    };

});
'use strict';

app.controller('HeaderController',
    function ($scope, authService) {
        $scope.userIsLoggedIn = authService.isLoggedIn;

        $scope.userLogout = function() {
            authService.logout(
            function(res) {
                console.log(res);
            }, function(error) {
                console.log(error);
            });
        }
    }
);

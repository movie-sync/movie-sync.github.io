'use strict';

app.controller('LoginController',
    function ($scope, $location, authService) {
        $scope.loginUser = function() {
            authService.login({
                username: $scope.loginUsername,
                password: $scope.loginPassword
            }, function(res) {
                $location.path('/home');
                console.log(res);
            }, function(error) {
                console.log(error);
            });
        }
    }
);

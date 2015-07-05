'use strict';

app.controller('RegisterController',
    function ($scope, $location, authService) {
        $scope.registerUser = function() {
            authService.register({
                email: $scope.registerEmail,
                username: $scope.registerUsername,
                password: $scope.registerPassword
            }, function(res) {
                $location.path('/login');
                console.log(res);
            }, function(error) {
                console.log(error);
            });
        }
    }
);

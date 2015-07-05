'use strict';

app.factory('authService',
    function ($http) {
        return {
            login: function(loginData, success, error) {
                var request = {
                    method: 'GET',
                    url: constants.loginUserUrl + '?username=' + loginData.username + '&password=' + loginData.password,
                    headers: constants.defaultHeaders
                };

                $http(request).success(function(data) {
                    sessionStorage['currentUser'] = data.sessionToken;
                    success(data);
                }).error(error);
            },
            register: function(registerData, success, error) {
                var request = {
                    method: 'POST',
                    url: constants.registerUserUrl,
                    headers: constants.defaultHeaders,
                    data: registerData
                };

                $http(request).success(function(data) {
                    success(data);
                }).error(error);
            },
            logout: function() {
                delete sessionStorage['currentUser'];
            },
            isLoggedIn: function() {
                return sessionStorage['currentUser'] != undefined;
            }
        }   
    }
);

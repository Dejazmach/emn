angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8080/marketServerNew/webapi/specificProduct/spv/sp1').
        then(function(response) {
            $scope.greeting = response.data;
        });
});
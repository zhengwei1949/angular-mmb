'use strict';
var sitenavController = myApp.controller('sitenavController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getSitenav = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getsitenav'
        }).success(function(data) {
            $scope.sitenavs = data.result;
            console.log($scope.sitenavs);
        });
    }
    $scope.getSitenav();
}]);

'use strict';
var brandtitleController = myApp.controller('brandtitleController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getBrandTitle = function() {
        $http({
            method: 'get',
            url: 'http://127.0.0.1:9090/api/getbrandtitle'
        }).success(function(data) {
            $scope.brandtitles = data.result;
        });
    }
    $scope.getBrandTitle();
}]);
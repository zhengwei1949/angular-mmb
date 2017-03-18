'use strict';
var couponController = myApp.controller('couponController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getCoupon = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getcoupon'
        }).success(function(data) {
            $scope.coupons = data.result;
        });
    }
    $scope.getCoupon();
}]);
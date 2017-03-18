'use strict';
var couponproductController = myApp.controller('couponproductController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getCouponProduct = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getcouponproduct',
            params: { "couponid": $scope.couponid }
        }).success(function(data) {
            for (var i = 0; i < data.result.length; i++) {
                data.result[i].couponProductImg = $sce.trustAsHtml(data.result[i].couponProductImg);
            }
            $scope.couponproducts = data.result;
        });
    }
    $scope.getCouponProduct();
}]);
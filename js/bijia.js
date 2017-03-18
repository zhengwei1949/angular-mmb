'use strict';
var bijiaController = myApp.controller('bijiaController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getProduct = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getproduct',
            params: { "productid": $scope.productId }
        }).success(function(data) {
            for (var i = 0; i < data.result.length; i++) {
                data.result[i].productImg = $sce.trustAsHtml(data.result[i].productImg);
                data.result[i].bjShop = $sce.trustAsHtml(data.result[i].bjShop);
            }
            $scope.product = data.result[0];
        });
    }
    $scope.getProduct();
    $scope.getProductCom = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getproductcom',
            params: { "productid": $scope.productId }
        }).success(function(data) {
            $scope.productcoms = data.result;
        });
    }
    $scope.getProductCom();
    $scope.getCategory = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getcategorybyid',
            params: { "categoryid": $scope.categoryId }
        }).success(function(data) {
            $scope.categoryes = data.result;
        });
    }
    $scope.getCategory();
}]);

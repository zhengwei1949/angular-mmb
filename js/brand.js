'use strict';
var brandController = myApp.controller('brandController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getBrand = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getbrand',
            params: { "brandtitleid": $scope.brandtitleid }
        }).success(function(data) {
            $scope.brands = data.result;
        });
    }
    $scope.getBrand();
    $scope.getBrandProduct = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getbrandproductlist',
            params: { "brandtitleid": $scope.brandtitleid,"pagesize":4 }
        }).success(function(data) {
            for (var i = 0; i < data.result.length; i++) {
                data.result[i].productImg = $sce.trustAsHtml(data.result[i].productImg);
            }
            $scope.brandproducts = data.result;
            $scope.getBrandProductCom($scope.brandproducts[0]);
        });
    }
    $scope.getBrandProduct();
    $scope.getBrandProductCom = function(product) {        
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getproductcom',
            params: { "productid": product.productId }
        }).success(function(data) {
            for (var i = 0; i < data.result.length; i++) {
                data.result[i].productName = product.productName;
                data.result[i].productImg = product.productImg;
            }
            $scope.brandproductcoms = data.result;
        });
    }
}]);

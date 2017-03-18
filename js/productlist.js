'use strict';
var productlistController = myApp.controller('productlistController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getProductlist = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getproductlist',
            params: { "categoryid": $scope.categoryId, "pageid": $scope.pageid || 1 }
        }).success(function(data) {
            for (var i = 0; i < data.result.length; i++) {
                data.result[i].productImg = $sce.trustAsHtml(data.result[i].productImg);
            }
            console.log(data);
            $scope.productlists = data.result;
            $scope.pagesize = data.pagesize;
            $scope.pages = [];
            $scope.pageMax = Math.ceil(data.totalCount / data.pagesize);
            for (var i = 0; i < $scope.pageMax; i++) {
                $scope.pages.push(i + 1);
            }
            if ($scope.pageid >= $scope.pageMax) {
                $scope.pageid = ($scope.pageMax - 1);
            }
            $scope.pageid = $scope.pageid
        });
    }
    $scope.getProductlist();
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
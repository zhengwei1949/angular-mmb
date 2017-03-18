'use strict';
var moneyctrlController = myApp.controller('moneyctrlController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getMoneyCtrl = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getmoneyctrl',
            params: { "pageid": $scope.pageid - 1 }
        }).success(function(data) {
            for (var i = 0; i < data.result.length; i++) {
                data.result[i].productImgSm = $sce.trustAsHtml(data.result[i].productImgSm);
            }
            $scope.moneyctrls = data.result;
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
    $scope.getMoneyCtrl();
}]);
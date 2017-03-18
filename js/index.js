'use strict';


var indexmenuController = myApp.controller('indexmenuController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getIndexMenu = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getindexmenu', // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            datatype: "jsonp",
            callback: "callback"
        }).success(function(data) {
            for (var i = 0; i < data.result.length; i++) {
                data.result[i].img = $sce.trustAsHtml(data.result[i].img);
            }
            data.result[0].titlehref = "#/category";
            data.result[1].titlehref = "#/moneyctrl";
            data.result[2].titlehref = "#/inlanddiscount";
            data.result[3].titlehref = "#/baicaijia";
            data.result[4].titlehref = "#/moneyctrl";
            data.result[5].titlehref = "#/coupon";
            data.result[6].titlehref = "#/";
            data.result[7].titlehref = "#/";
            data.result[8].titlehref = "#/gsproduct";
            data.result[9].titlehref = "#/";
            data.result[10].titlehref = "#/sitenav";
            data.result[11].titlehref = "#/brandtitle";
            $scope.indexmenus = data.result;
        });
    }
    $scope.toggle = function() {
        $('.row > div').eq(8).toggle(200);
        $('.row > div').eq(9).toggle(200);
        $('.row > div').eq(10).toggle(200);
        $('.row > div').eq(11).toggle(200);
    }
    $scope.getIndexMenu();
    $scope.getMoneyCtrl = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getmoneyctrl', // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).success(function(data) {
            for (var i = 0; i < data.result.length; i++) {
                data.result[i].productImgSm = $sce.trustAsHtml(data.result[i].productImgSm);
            }
            // console.log(data);
            $scope.moneyctrls = data.result;
        });
    }
    $scope.getMoneyCtrl();
}]);
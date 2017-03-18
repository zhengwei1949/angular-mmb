'use strict';
var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('TextController', function($scope) {
    $scope.someText = '测试显示内容';
});
//路由
function mmbRouteConfig($routeProvider) {
    $routeProvider.
    when('/', {
        controller: IndexController,
        templateUrl: 'tmp/index-tmp.html'
    }).
    when('/category', {
        controller: CategoryController,
        templateUrl: 'tmp/category-tmp.html'
    }).
    when('/productlist/:categoryId/:pageid', {
        controller: ProductlistController,
        templateUrl: 'tmp/productlist-tmp.html'
    }).
    when('/bijia/:categoryId/:productId', {
        controller: BijiaController,
        templateUrl: 'tmp/bijia-tmp.html'
    }).
    when('/moneyctrl/:pageid', {
        controller: MoneyctrlController,
        templateUrl: 'tmp/moneyctrl-tmp.html'
    }).
    when('/moneyctrl', {
        controller: MoneyctrlController,
        templateUrl: 'tmp/moneyctrl-tmp.html'
    }).
    when('/moneyproduct/:productId', {
        controller: MoneyProductController,
        templateUrl: 'tmp/moneyproduct-tmp.html'
    }).
    when('/inlanddiscount', {
        controller: InlanddiscountController,
        templateUrl: 'tmp/inlanddiscount-tmp.html'
    }).
    when('/discount/:productId', {
        controller: DiscountController,
        templateUrl: 'tmp/discount-tmp.html'
    }).
    when('/baicaijia', {
        controller: BaicaijiaController,
        templateUrl: 'tmp/baicaijia-tmp.html'
    }).
    when('/baicaijia/:titleid', {
        controller: BaicaijiaController,
        templateUrl: 'tmp/baicaijia-tmp.html'
    }).
    when('/gsproduct', {
        controller: GsproductController,
        templateUrl: 'tmp/gsproduct-tmp.html'
    }).
    when('/gsproduct/:shopid/:areaid', {
        controller: GsproductController,
        templateUrl: 'tmp/gsproduct-tmp.html'
    }).
    when('/gsproduct/:shopid/:areaid/:shopname/:areaname', {
        controller: GsproductController,
        templateUrl: 'tmp/gsproduct-tmp.html'
    }).
    when('/sitenav', {
        controller: SitenavController,
        templateUrl: 'tmp/sitenav-tmp.html'
    }).
    when('/coupon', {
        controller: CouponController,
        templateUrl: 'tmp/coupon-tmp.html'
    }).
    when('/couponproduct/:couponid', {
        controller: CouponproductController,
        templateUrl: 'tmp/couponproduct-tmp.html'
    }).
    when('/brandtitle', {
        controller: BrandtitleController,
        templateUrl: 'tmp/brandtitle-tmp.html'
    }).
    when('/brand/:brandtitleid', {
        controller: BrandController,
        templateUrl: 'tmp/brand-tmp.html'
    }).
    when('/view/:id', { //在id前面加一个冒号，从而制订了一个参数化URL
        controller: DetailController,
        templateUrl: 'detail.html'
    });
}
myApp.config(mmbRouteConfig); //配置我们的路由

var messages = "";

function IndexController($scope) {
    // console.log(messages);
    // $scope.a = messages;

}

function CouponController($scope) {
    // console.log(messages);
    // $scope.a = messages;

}

function CouponproductController($scope, $routeParams) {
    // console.log(messages);
    // $scope.a = messages;
    $scope.couponid = $routeParams.couponid;
}

function BrandtitleController($scope) {
    // console.log(messages);
    // $scope.a = messages;

}

function BrandController($scope, $routeParams) {
    // console.log(messages);
    // $scope.a = messages;
    $scope.brandtitleid = $routeParams.brandtitleid;
}

function SitenavController($scope) {
    // console.log(messages);
    // $scope.a = messages;

}

function GsproductController($scope, $routeParams) {
    // console.log(messages);
    // $scope.a = messages;
    $scope.shopid = $routeParams.shopid || 0;
    $scope.areaid = $routeParams.areaid || 0;
    $scope.shopname = $routeParams.shopname || "京东";
    $scope.areaname = $routeParams.areaname || "华北";
}

function BaicaijiaController($scope, $routeParams) {
    // console.log(messages);
    // $scope.a = messages;    
    $scope.titleid = $routeParams.titleid;
}

function InlanddiscountController($scope) {

}

function DiscountController($scope, $routeParams) {
    $scope.productId = $routeParams.productId

}

function ListController($scope) {
    $scope.messages = messages;
}

function MoneyctrlController($scope, $routeParams) {
    if ($routeParams.pageid <= 0) {
        $routeParams.pageid = 1;
    }
    $scope.pageid = $routeParams.pageid
}

function MoneyProductController($scope, $routeParams) {
    if ($routeParams.productId <= 0) {
        $routeParams.productId = 20;
    }
    $scope.productId = $routeParams.productId
}

function BijiaController($scope, $routeParams) {
    //拿到商品分类页传过来的分类id
    $scope.categoryId = $routeParams.categoryId;
    $scope.productId = $routeParams.productId;
}

function ProductlistController($scope, $routeParams) {
    //拿到商品分类页传过来的分类id
    $scope.categoryId = $routeParams.categoryId;
    if ($routeParams.pageid <= 1) {
        $routeParams.pageid = 1;
    }
    $scope.pageid = $routeParams.pageid;
}

function CategoryController($scope) {
    $scope.messages = messages;
}

function DetailController($scope, $routeParams) {
    $scope.message = messages[$routeParams.id];
}
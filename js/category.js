var categoryController = myApp.controller('categoryController', ["$scope", "$http", "$sce", function($scope, $http, $sce) {
    $scope.getCategoryTitle = function() {
        $http({
            method: 'get',
            url: "http://127.0.0.1:9090/api/getcategorytitle"
        }).success(function(data) {
            $scope.categorytitles = data.result;
        })
    }
    $scope.getCategoryTitle();
    $scope.getCategory = function(titleid) {
        $http({
            method: 'get',
            url: "http://127.0.0.1:9090/api/getcategory",
            params: { 'titleid': titleid || 0 }
        }).success(function(data) {
            $scope.categoryes = data.result;
        })
    }
    $scope.getCategory();
}]);
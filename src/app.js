'use strict';

let app = angular.module('testDynamicInput', ['saprun-dynamic-input']);

app.controller('testCtrl', ['$scope', function($scope) {
    $scope.first = 0;
    $scope.second = 0;
    $scope.third = 0;
    $scope.changeHandler = () => {
        console.log("U have change me!");
    }
}]);
'use strict';

let app = angular.module('testDynamicInput', ['saprun-dynamic-input']);

app.controller('testCtrl', ['$scope', function($scope) {
    $scope.inputValue = 0;
    $scope.changeHandler = () => {
        console.log("U have change me!");
    }
}]);
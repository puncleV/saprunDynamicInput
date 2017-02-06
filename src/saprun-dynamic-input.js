let saprunDynamicInput = angular.module('saprun-dynamic-input', []);

saprunDynamicInput.directive('saprunDynamicInput', function() {
        return {
            restrict: 'E',
            transclude: true,
            template: `
                <div>
                  <input ng-model="value" ng-change="changeHandler()">
                  <div class="spacer" ng-bind="value"></div>
                </div>
                <span class="symbol" ng-bind="::unit"></span>`,
            scope: {
                value: "=",
                change: "=",
                unit: "@",
                maxlength: "="
            },
            link: function(scope) {
                scope.maxlength = parseInt(scope.maxlength, 10);
                if( scope.unit == null ) { scope.unit = ""; }
                scope.changeHandler = () => {
                    if( !isNaN(scope.maxlength) && ( scope.value.length > scope.maxlength ) ) {
                        scope.value = scope.value.substr(0, scope.maxlength);
                    }
                    scope.change();
                }
            }
        }
});

(function () {
    if (typeof define === 'function' && define.amd) {
        define(function(){ return saprunDynamicInput.name; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = saprunDynamicInput.name;
    } else {
    }
}).call(this);

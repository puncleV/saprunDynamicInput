let saprunDynamicInput = angular.module('saprun-dynamic-input', []);

saprunDynamicInput.directive('saprunDynamicInput', function() {
        return {
            restrict: 'E',
            transclude: true,
            template: `
                <div class="container" tabindex="1">
                    <div class="input-container">
                      <input id="{{inputid}}" ng-model="value" ng-change="changeHandler()" maxlength="{{maxlength}}">
                      <div class="spacer" ng-bind="charSpacer + value"></div>
                    </div>
                    <span class="unit" ng-bind="unit"></span>
                </div>
            `,
            scope: {
                value: "=",
                change: "&",
                unit: "@",
                maxlength: "=?",
                inputid: "@"
            },
            link: function(scope) {
                if( scope.unit == null ) { scope.unit = ""; }
                if( scope.maxlength == null ) { scope.maxlength = ""; }
                if( scope.inputid == null) { scope.inputid = `saprunDynamicInput-${scope.$id}`; }
                scope.changeHandler = () => {
                    let currentValue = scope.value;
                    scope.charSpacer = ( currentValue.length == 0 ) ? "0" : "";
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

let saprunDynamicInput = angular.module('saprun-dynamic-input', []);
let angularTimeout = null;

class SaprunDynamicInputComponent {
    constructor( $timeout ) {
        if( this.unit === null ) { this.unit = ""; }
        if( this.maxlength === null ) { this.maxlength = ""; }
        if( this.inputid === null) { this.inputid = `saprunDynamicInput-${this.$id}`; }
        angularTimeout = $timeout;
    }
    requiredValue() {
        return ( this.required !== "true" ) || ( ( this.value !== null ) && this.value.toString().length )
                ?  "1" : "";
    }

    spacer() {
        let emptySpacer = ( this.value.toString && this.value.toString().length === 0 ) ? "0" : "";
        return `${emptySpacer}${this.value}`;
    }
    changeHandler() {
        angularTimeout(this.change);
    }
}
saprunDynamicInput.component('saprunDynamicInput', {
            template: `
                <div class="saprun-dynamic-input" tabindex="1">
                    <div class="saprun-dynamic-input_container">
                      <input
                          id="{{$ctrl.inputid}}"
                          ng-model="$ctrl.value"
                          ng-change="$ctrl.changeHandler()"
                          maxlength="{{$ctrl.maxlength}}"
                          ng-trim="false"
                          class="saprun-dynamic-input_input {{$ctrl.inputClass}}"
                      >
                      <input type="hidden" required ng-model="$ctrl.requiredValue()">
                      <div class="saprun-dynamic-input_spacer" ng-bind="$ctrl.spacer()"></div>
                    </div>
                    <span class="saprun-dynamic-input_unit" ng-bind="$ctrl.unit"></span>
                </div>
            `,
            controller: SaprunDynamicInputComponent,
            bindings: {
                value: "=",
                change: "&",
                unit: "@",
                maxlength: "=?",
                inputid: "@?",
                required: "@?",
                inputClass: "@?"
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

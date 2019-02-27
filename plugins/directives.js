import Vue from 'vue';
import VMasker from './MaskedInput.js';
import ValidateJS from 'validate.js';
import { isEmpty } from 'underscore';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput);

Vue.directive('ui-mask', (el, binding) => {
    if(binding.value.mask) {
        VMasker(el).maskPattern(binding.value.mask);
    }
});

ValidateJS.validators.array = (arrayItems, itemConstraints) => {
    const arrayItemErrors = arrayItems.reduce((errors, item, index) => {
      const error = ValidateJS(item, itemConstraints)
      if (error) errors[index] = { error: error }
      return errors
    }, {})

    return isEmpty(arrayItemErrors) ? null : { errors: arrayItemErrors }
}

ValidateJS.validators.istrue = function(value, options, key, attributes) {
    if(value == true) {
        return null;
    }

    return "is not checked";
};
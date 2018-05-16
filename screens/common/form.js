import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

import {
    login,
    register,
} from './form-actions';

export class Form extends MobxReactForm {

    plugins() {
        return {

            dvr: {
                package: validatorjs,
                extend: ($validator) => {
                    var messages = $validator.getMessages('en');
                    messages.required = 'Whoops, :attribute field is required.';
                    $validator.setMessages('en', messages);
                },
            }

        }
    }

    options() {
        return {
            validateOnChange: true
        }
    }


    hooks() {
        return {

            onSuccess(form) {

                switch (form.name) {

                    case 'login-form':
                        login(form);
                        break;

                    case 'register-form':
                        register(form);
                        break;

                    default:
                        return;

                }

            },//End of onSuccess

            onError(form) {
                // get all form errors
                console.error('All form errors', form.errors());
            }

        }//End of return 
    }//End of hooks()


}
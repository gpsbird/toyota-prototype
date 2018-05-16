import { Store } from "./services";
import properties from "./properties";

export const login = (form) => {

    properties.showSpinner(true);

    Store.loginUser(form.values()).then((user) => {

        form.clear();
        properties.showSpinner(false);

    }).catch((error) => {

        let err = {
            status: true,
            title: 'Login failed: - ',
            message: error.message
        }

        properties.setError(err);
        properties.showSpinner(false);
    });
}

export const register = (form) => {

    properties.showSpinner(true);

    Store.registerUser(form.values()).then((user) => {

        form.clear();
        //Store.logoutRegisteredUser();
        properties.showSpinner(false);

    }).catch((error) => {

        let err = {
            status: true,
            title: 'Login failed: - ',
            message: error.message
        }

        properties.setError(err);
        properties.showSpinner(false);
    });
}
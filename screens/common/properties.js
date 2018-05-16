import { observable, action } from 'mobx';

class properties{    

    @observable processing = false

    @observable show_spinner = false    

    @observable logged_in = false

    @observable header_title = 'Albums'

    @observable user = {}

    @observable error = {}    

    @action showSpinner(value){
        this.show_spinner = value;
    }

    @action showSidebar(value){
        this.show_sidebar = value;
    }    

    @action setError(value){
        this.error = value;
    }     

    @action authenticate(value){
        
        this.logged_in = value;

        if(value === true){            
            this.showSpinner(false);
        }
    }

    @action setUser(value){
        this.user = value;
    } 

    @action changeHeader(value){
        this.header_title = value;
    }    

    @action changeProcessing(value){
        this.processing = value;
    }     

}

export default new properties()


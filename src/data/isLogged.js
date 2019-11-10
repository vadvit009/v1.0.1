import { observable, decorate } from 'mobx';

class isLogged {
    // all = [
        // {
            isLogged= false
        // }
    // ];
}

decorate(isLogged, {
    isLogged: observable,
});

export default new isLogged();
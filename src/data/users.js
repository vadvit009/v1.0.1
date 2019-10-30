import { observable, decorate } from 'mobx';

class users {
    all = [
        { id: 1, email: 'vad', pass: 'vad' },
        { id: 2, email: 'qwerty', pass: 'qwerty' },
        { id: 3, email: 'admin', pass: 'admin' }
    ]
}

decorate(users, {
    all: observable
});

export default new users();
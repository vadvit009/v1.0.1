import { observable, decorate } from 'mobx';

class users {
    all = [
        { id: 1, email: 'vad@gmail.com', pass: 'vad', name: 'vad', phone: '+123' },
        { id: 2, email: 'qwerty@gmail.com', pass: 'qwerty', name: 'qwerty', phone: '+456' },
        { id: 3, email: 'admin@gmail.com', pass: 'admin', name: 'admin', phone: '+789' },
    ];
}

decorate(users, {
    all: observable,
});

export default new users();
import itemsReducer from "./itemsReducer";

let store = {
    _state: {
        itemsData: [
            {   id: 0,
                title: 'War and Peace',
                description: 'dhgfhjgf',
                created: '1869'
            },
            {   id: 1,
                title: 'Don Quixote',
                description: 'description',
                created: '1605'
            },
            {   id: 2,
                title: 'Crime and Punishment',
                description: '35252',
                created: '1866'
            },
            {   id: 3,
                title: 'The Catcher in the Rye',
                description: 'gfdsgsfv',
                created: '1945'
            }
        ],
        actualPassword: '11111111',
        actualLogin: 'iii@iii.com',
        isLogged : false
    },

    dispatch(action) {
        this._state = itemsReducer(this._state, action);
        this._callSubscriber(this._state);
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;

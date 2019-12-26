export const REDUCER_TYPE = {
    DELETE_ITEM: 'DELETE_ITEM',
    SET_LOGGED: 'SET_LOGGED'
};

const itemsReducer = (state, action) => {
    switch (action.type) {
        case REDUCER_TYPE.DELETE_ITEM:
            state.itemsData.splice(action.index, 1);
            return state;
        case REDUCER_TYPE.SET_LOGGED:
            state.isLogged = true;
            return state;
        default:
            return state;
    }
};

export const deleteItemActionCreator = (index) => ({
        type: REDUCER_TYPE.DELETE_ITEM,
        index: index
});
export const setLoggedActionCreator = () => ({
    type: REDUCER_TYPE.SET_LOGGED,
});

export default itemsReducer;
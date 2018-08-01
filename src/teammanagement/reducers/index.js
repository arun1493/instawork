export const members = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MEMBER':
            state = [...state, action.data];
            break;
        case 'UPDATE_MEMBER':
            state = state.map((member) => member.id === action.data.id ? action.data : member);
            break;
        case 'DELETE_MEMBER':
            state = state.filter((member) => member.id !== action.id);
            break;
        default:
            return state;
    }
    return state;
};

export const editData = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_MEMBER':
            state = action.data;
            break;
        default:
            return state;
    }
    return state;
};
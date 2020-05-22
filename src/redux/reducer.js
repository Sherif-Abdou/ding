import { REFRESH } from "./actions";

const initialState = {
    items: [],
};

export function ding(state = initialState, action) {
    switch (action.type) {
        case REFRESH:
            return Object.assign({}, state, {
                items: action.items,
            });
        default:
            return state;
    }
}

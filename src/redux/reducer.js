import { REFRESH, SETFEED } from "./actions";

const initialState = {
    items: [],
    feed: "",
};

export function ding(state = initialState, action) {
    switch (action.type) {
        case REFRESH:
            return Object.assign({}, state, {
                items: action.items,
            });
        case SETFEED:
            return Object.assign({}, state, {
                feed: action.feed,
            });
        default:
            return state;
    }
}

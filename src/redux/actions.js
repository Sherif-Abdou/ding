import * as Parser from "rss-parser";

// Action Types

export const REFRESH = "REFRESH";
export const SETFEED = "SETFEED";

// Constants
const RSSPARSER = new Parser();

// Action Creators

export function refresh(items) {
    return { type: REFRESH, items };
}

export function setFeed(feed) {
    return { type: SETFEED, feed };
}

// Async Actions

export function refreshAsync() {
    return (dispatch, getState) => {
        const url = getState().feed;
        console.log("Refresh url: " + url);
        fetch("http://localhost:5000/rss", {
            headers: {
                url: url,
            },
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.items);
                dispatch(refresh(res.items));
            });
    };
}

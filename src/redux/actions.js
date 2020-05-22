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
    return (dispatch) => {
        fetch("http://localhost:5000/rss", {
            headers: {
                url: "http://rss.cnn.com/rss/cnn_topstories.rss",
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

import * as Parser from "rss-parser";

// Action Types

export const REFRESH = "REFRESH";

// Constants
const RSSPARSER = new Parser();

// Action Creators

export function refresh(items) {
  return { type: REFRESH, items };
}

// Async Actions

export function refreshAsync() {
  return (dispatch) => {
    fetch("http://localhost:5000/cnn")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(refresh(res.items));
      });
  };
}

import React from "react";
import List from "./List";
import FeedControl from "./FeedControl";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Ding</h1>
                <FeedControl />
                <br />
                <List />
            </div>
        );
    }
}

export default App;

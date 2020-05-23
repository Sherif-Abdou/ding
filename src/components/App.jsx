import React from "react";
import List from "./List";
import FeedControl from "./FeedControl";
import Nav from "./Nav";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <br />
                <div className="container">
                    <br />
                    <List />
                </div>
            </div>
        );
    }
}

export default App;

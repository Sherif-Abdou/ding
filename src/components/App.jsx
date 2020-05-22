import React from "react";
import List from "./List";
import { refreshAsync } from "../redux/actions";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Ding</h1>

                <List />
            </div>
        );
    }
}

export default App;

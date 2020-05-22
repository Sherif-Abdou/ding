import React from "react";
import List from "./List";
import { refreshAsync } from "../redux/actions";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Ding</h1>

                <List />
            </div>
        );
    }
}

export default App;

import React from "react";
import FeedControl from "./FeedControl";

class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light navbar-expand-lg">
                    <a className="navbar-brand col-2">Ding</a>
                    <FeedControl />
                </nav>
            </div>
        );
    }
}

export default Nav;

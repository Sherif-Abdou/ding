import React from "react";
import { connect } from "react-redux";
import { refreshAsync } from "../redux/actions";
import ListItem from "./ListItem";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.props.refreshAsync();
    }

    render() {
        let listItems;
        if (this.props.articles) {
            listItems = this.props.articles.map((item, i) => (
                <li className="list-group-item" key={i}>
                    <ListItem item={item} itemId={i}/>
                </li>
            ));
        } else {
            listItems = <p>None</p>;
        }

        return (
            <div>
                <ul className="list-group">{listItems}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const { ding } = state;
    console.log("Items: " + ding.items);
    return {
        articles: ding.items,
    };
};

const mapDispatchToProps = { refreshAsync };

export default connect(mapStateToProps, mapDispatchToProps)(List);

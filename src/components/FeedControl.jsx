import React from "react";
import { connect } from "react-redux";
import { setFeed, refreshAsync } from "../redux/actions";

class FeedControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputUpdate = this.handleInputUpdate.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    handleInputUpdate(event) {
        this.props.setFeed(event.target.value);
    }

    handleRefreshClick(event) {
        event.preventDefault();
        this.props.refreshAsync();
    }

    render() {
        return (
            <div className="row">
                <input
                    type="text"
                    value={this.props.feed}
                    onChange={this.handleInputUpdate}
                    className="form-control col-6"
                />
                <button
                    className="btn btn-primary col-2"
                    onClick={this.handleRefreshClick}
                >
                    Refresh
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        feed: state.feed,
    };
};

const mapDispatchToProps = { setFeed, refreshAsync };

export default connect(mapStateToProps, mapDispatchToProps)(FeedControl);

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
            <div>
                <div className="row form-inline">
                    <input
                        type="text"
                        value={this.props.feed}
                        onChange={this.handleInputUpdate}
                        className="form-control col-sm-8"
                    />
                    <button
                        className="btn btn-primary col-sm-4"
                        onClick={this.handleRefreshClick}
                    >
                        Refresh
                    </button>
                </div>
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

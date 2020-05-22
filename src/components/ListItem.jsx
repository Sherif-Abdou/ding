import React from "react";

class ListItem extends React.Component {
    render() {
        const { item, id } = this.props;

        const referenceID = "itemDetails" + id;

        return (
            <div>
                <div>
                    <h2>{item.title}</h2>
                    <a
                        className="btn btn-primary"
                        data-toggle="collapse"
                        href={"#" + referenceID}
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        More
                    </a>
                </div>
                <div className="collapse" id={referenceID}>
                    <div className="card card-body">
                        <p>{item.content}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;

import React from "react";
import DOMPurify from "dompurify";

class ListItem extends React.Component {
    render() {
        const { item, itemId } = this.props;

        const referenceID = "itemDetails" + itemId;
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
                    <div
                        className="card card-body"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(item.content),
                        }}
                    ></div>
                </div>
            </div>
        );
    }
}

export default ListItem;

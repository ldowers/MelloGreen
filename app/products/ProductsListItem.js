import React from "react";

export default class ProductListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="row">
            <div className="col-sm-6">
                {this.props.product.name}
            </div>
            <div className="col-sm-3">
                {this.props.product.sku}
            </div>
        </div>
        );
    }
}

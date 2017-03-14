import React from "react";

import SaleListItem from "./SalesListItem";

export default class SalesList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <div className="row">
                <div className="col-sm-3"><h4>Product</h4></div>
                <div className="col-sm-3"><h4>Distributor</h4></div>
                <div className="col-sm-2"><h4>Quantity</h4></div>
                <div className="col-sm-2"><h4>Discount</h4></div>
                <div className="col-sm-2"><h4>Sale Price</h4></div>
            </div>
            {this.props.sales.map(sale => {
                return <SaleListItem key={sale._id} sale={sale}/>;
            })}
        </div>
        );
    }
}
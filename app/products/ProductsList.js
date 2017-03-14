import React from "react";

import ProductListItem from "./ProductsListItem";

export default class ProductsList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <div className="row">
                <div className="col-sm-6"><h4>Product Name</h4></div>
                <div className="col-sm-3"><h4>SKU</h4></div>
            </div>
            {this.props.products.map(product => {
                return <ProductListItem key={product._id} product={product}/>;
            })}
        </div>
        );
    }
}
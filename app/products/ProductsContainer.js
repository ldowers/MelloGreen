import React from "react";

import MelloGreenData from '../shared/data';
import ProductsList from "./ProductsList";

export default class ProductsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        let api = new MelloGreenData();
        let self = this;
        api.getProducts().then(data => {
            self.setState({products: data.data});
        });
    }

    render(){
        return(
            <ProductsList products={this.state.products} />
        );
    }
}
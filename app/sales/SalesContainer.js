import React from "react";

import MelloGreenData from '../shared/data';
import SalesList from "./SalesList";

export default class SalessContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {sales: []};
    }

    componentDidMount() {
        let api = new MelloGreenData();
        let self = this;
        api.getSales().then(data => {
            self.setState({sales: data.data});
        });
    }

    render(){
        return(
            <SalesList sales={this.state.sales} />
        );
    }
}
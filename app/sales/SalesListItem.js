import React from "react";

export default class SaleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    calculateSaleTotal(sale){
        let amount = sale.currentPrice * sale.quantity;
        let discount = sale.discount / 100;
        amount = amount - discount;
        return amount.toFixed(2);
    }

    render() {
        return (
        <div className="row">
            <div className="col-sm-3">{this.props.sale.product.name} ({this.props.sale.product.sku})</div>
                <div className="col-sm-3">{this.props.sale.distributor.name}</div>
                <div className="col-sm-2">{this.props.sale.quantity}</div>
                <div className="col-sm-2">{this.props.sale.discount}%</div>
                <div className="col-sm-2">${this.calculateSaleTotal(this.props.sale)}</div>
        </div>
        );
    }
}
